import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.VITE_SUPABASE_URL;
const supabaseKey = import.meta.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
