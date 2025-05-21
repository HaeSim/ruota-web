import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

/**
 * 브라우저 환경에서만 사용하는 Supabase 클라이언트 인스턴스
 */
export const supabaseBrowser = createClient(supabaseUrl, supabaseAnonKey)
