import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://avlcqhvulocdqdjmwyff.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_-V66BYjKyD65dD7TpE12Jg__WUsT-k7";

export const inquiriesClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
  global: {
    fetch: (input, init) => {
      const h = new Headers(init?.headers);
      if (h.get("Authorization") === `Bearer ${SUPABASE_PUBLISHABLE_KEY}`) {
        h.delete("Authorization");
      }
      h.set("apikey", SUPABASE_PUBLISHABLE_KEY);
      return fetch(input, { ...init, headers: h });
    },
  },
});
