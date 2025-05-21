import { redirect } from "next/navigation"
import { createSupabaseServer } from "./supabase-server"

/**
 * SSR 환경에서 현재 유저를 반환 (없으면 null)
 */
export async function getUserFromServer() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user
}

/**
 * SSR 환경에서 인증된 유저가 아니면 지정 경로로 리디렉션
 */
export async function requireUserOrRedirect(redirectTo: string = "/admin") {
  const user = await getUserFromServer()
  if (!user) {
    redirect(redirectTo)
  }
  return user
}
