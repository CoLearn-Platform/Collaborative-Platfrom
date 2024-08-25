import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bqdkeybeedynvjgvdosq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxZGtleWJlZWR5bnZqZ3Zkb3NxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MDIxOTYsImV4cCI6MjA0MDE3ODE5Nn0.vTDbgj7nklqbz1aj_9JFqafgIx9VBTTqQzFxYDesl8Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
