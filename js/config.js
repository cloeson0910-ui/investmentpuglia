const SUPABASE_URL = "https://ksfxfysvpftldthahzte.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_5n0dMCTNkuFV3UdoZc7uNA_bp0qPQah";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
