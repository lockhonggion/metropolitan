
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gokkqzjkrvysjxsbeeem.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdva2txemprcnZ5c2p4c2JlZWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNjQyNDUsImV4cCI6MjA4NTY0MDI0NX0.5UwmgWpaq-NwrryGSNmHXePXp1vCB-F4q8MbbhOhxLw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
