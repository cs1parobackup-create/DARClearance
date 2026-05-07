// supabase-config.js
const supabaseUrl = 'https://tqeueibigqwxcizhvdty.supabase.co';
const supabaseKey = 'sb_publishable_oXBtC1VgBlO07oEmqpcFpw_gBtVMpvT';

// Use a global variable name that won't conflict with the library itself
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
