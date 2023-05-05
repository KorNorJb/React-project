import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vryqtdsqnxukwfupwxbl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyeXF0ZHNxbnh1a3dmdXB3eGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMTExOTYsImV4cCI6MTk5ODc4NzE5Nn0.j3ElB9JI9wwv2EFDI2HtEFlOnvGT-cIBMrv7xHSL6KM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)