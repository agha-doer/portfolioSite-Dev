import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kthybhkhokzvkelgagbw.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if we have the required environment variables
if (!supabaseKey) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable. Authentication features will not work.');
}

// Create a fallback client that won't crash the app
export const supabase = createClient(
  supabaseUrl, 
  supabaseKey || 'fallback-key-for-development'
)
