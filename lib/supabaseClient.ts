import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wtlmrdqayejbbwuzsbvc.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0bG1yZHFheWVqYmJ3dXpzYnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzOTgzMjEsImV4cCI6MjA4MTk3NDMyMX0.2jQw3Ythv8q9YhUGVc5zv5dbe_pu952keI4wKOZCo1g'

// Server-side Supabase client for SSG/ISR data fetching
export const supabaseServer = createClient(supabaseUrl, supabaseKey)

// Export for backwards compatibility with existing code
export const supabase = supabaseServer
