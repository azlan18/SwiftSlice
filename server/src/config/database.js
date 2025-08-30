//initialise supabase client
const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
if(!supabaseUrl || !supabaseAnonKey){
    throw new Error('SUPABASE_URL or SUPABASE_ANON_KEY is not set')
}
const supabase = createClient(supabaseUrl, supabaseAnonKey)

module.exports = {supabase};

