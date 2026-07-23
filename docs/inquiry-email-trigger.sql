-- Run this in your Supabase project's SQL Editor.
-- It sends every new row in public.inquiries to your TanStack webhook,
-- which then emails you via Resend.

-- 1) Enable pg_net (safe to re-run)
create extension if not exists pg_net with schema extensions;

-- 2) Store the webhook URL + shared secret in Supabase settings so we
--    don't hardcode them in the trigger function.
--    Replace the values below with your own before running:
--      - WEBHOOK_URL:  https://project--8d264dea-d5be-4c7a-9ed6-c10745ec2d8a.lovable.app/api/public/inquiry-webhook
--      - WEBHOOK_SECRET: (the value stored in the app as INQUIRY_WEBHOOK_SECRET — ask the app owner)
alter database postgres set "app.inquiry_webhook_url"    = 'https://project--8d264dea-d5be-4c7a-9ed6-c10745ec2d8a.lovable.app/api/public/inquiry-webhook';
alter database postgres set "app.inquiry_webhook_secret" = 'PASTE_INQUIRY_WEBHOOK_SECRET_HERE';

-- 3) Trigger function
create or replace function public.notify_inquiry_created()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  v_url    text := current_setting('app.inquiry_webhook_url', true);
  v_secret text := current_setting('app.inquiry_webhook_secret', true);
begin
  if v_url is null or v_secret is null then
    raise warning 'inquiry webhook not configured (app.inquiry_webhook_url / app.inquiry_webhook_secret)';
    return new;
  end if;

  perform net.http_post(
    url     := v_url,
    headers := jsonb_build_object(
                 'Content-Type',    'application/json',
                 'x-webhook-secret', v_secret
               ),
    body    := jsonb_build_object(
                 'id',         new.id,
                 'email',      new.email,
                 'message',    new.message,
                 'created_at', new.created_at
               )
  );
  return new;
end;
$$;

-- 4) Trigger
drop trigger if exists on_inquiry_created on public.inquiries;
create trigger on_inquiry_created
  after insert on public.inquiries
  for each row execute function public.notify_inquiry_created();
