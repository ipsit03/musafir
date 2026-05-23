import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xkwmdaajvowjepicsaka.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhrd21kYWFqdm93amVwaWNzYWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1MDg0MjksImV4cCI6MjA5NTA4NDQyOX0.ZZKXDOHSf1pT8Hd6BDKQaS5ReN7kaxnpYv3OxZFXY6w";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);