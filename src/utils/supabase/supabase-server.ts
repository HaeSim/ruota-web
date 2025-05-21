// supabase-server.ts: 서버(SSR)에서만 사용하는 Supabase 인스턴스 (쿠키 연동)
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/**
 * 서버 환경(SSR)에서만 사용하는 Supabase 서버 인스턴스 생성 함수
 * - 쿠키를 통해 세션을 안전하게 관리
 */
export async function createSupabaseServer() {
  const cookieStore = await cookies()

  const supabaseServer = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    }
  )

  return supabaseServer
}
