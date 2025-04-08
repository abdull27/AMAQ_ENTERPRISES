import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = `https://abdull27.supabase.co`;
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZHVsbDI3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjQyMDAsImV4cCI6MjAyNjAwMDIwMH0.2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q2Q';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);