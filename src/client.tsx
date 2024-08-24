import { createClient } from "@supabase/supabase-js";


const URL = 'https://nzjyyrbjjhufvgnlcewv.supabase.co'

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56anl5cmJqamh1ZnZnbmxjZXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ0ODAzNDEsImV4cCI6MjA0MDA1NjM0MX0.dJPqEvgzTmIDuNm9KG-AQE8NIc8KuFvemjkTAmTGpFY'

export const supabase = createClient(URL, API_KEY)

