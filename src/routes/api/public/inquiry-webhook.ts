import { createFileRoute } from "@tanstack/react-router";
import { createHmac, timingSafeEqual } from "crypto";

// Called by a Postgres trigger via pg_net after an insert into `inquiries`.
// Sends an email via Resend with the new inquiry's email + message.
export const Route = createFileRoute("/api/public/inquiry-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const secret = process.env.INQUIRY_WEBHOOK_SECRET;
        const resendKey = process.env.RESEND_API_KEY;
        const notifyTo = process.env.INQUIRY_NOTIFY_TO ?? "hello@novel-ethiopia.com";
        const fromAddress = process.env.INQUIRY_FROM_ADDRESS ?? "NOVEL <onboarding@resend.dev>";

        if (!secret || !resendKey) {
          console.error("inquiry-webhook: missing INQUIRY_WEBHOOK_SECRET or RESEND_API_KEY");
          return new Response("Server not configured", { status: 500 });
        }

        const provided = request.headers.get("x-webhook-secret") ?? "";
        const a = Buffer.from(provided);
        const b = Buffer.from(secret);
        if (a.length !== b.length || !timingSafeEqual(a, b)) {
          return new Response("Unauthorized", { status: 401 });
        }

        let payload: { email?: string; message?: string; created_at?: string; id?: string };
        try {
          payload = await request.json();
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }

        const email = (payload.email ?? "").toString().trim();
        const message = (payload.message ?? "").toString();
        if (!email) return new Response("Missing email", { status: 400 });

        const escape = (s: string) =>
          s.replace(/[&<>"']/g, (c) =>
            ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
          );

        const html = `
          <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0f172a">
            <h2 style="margin:0 0 16px;font-weight:600">New NOVEL inquiry</h2>
            <p style="margin:0 0 8px"><strong>From:</strong> ${escape(email)}</p>
            <p style="margin:0 0 8px"><strong>Region / route:</strong></p>
            <div style="white-space:pre-wrap;padding:12px;background:#f8fafc;border-radius:6px;border:1px solid #e2e8f0">${escape(message) || "<em>(none)</em>"}</div>
            ${payload.created_at ? `<p style="margin-top:16px;color:#64748b;font-size:12px">Received ${escape(payload.created_at)}</p>` : ""}
          </div>
        `;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [notifyTo],
            reply_to: email,
            subject: `New inquiry from ${email}`,
            html,
          }),
        });

        if (!res.ok) {
          const body = await res.text();
          console.error(`Resend send failed [${res.status}]: ${body}`);
          return new Response(`Resend failed: ${body}`, { status: 502 });
        }

        return new Response("ok", { status: 200 });
      },
    },
  },
});
