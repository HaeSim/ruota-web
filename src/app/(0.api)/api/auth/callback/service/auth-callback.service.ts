import { NextRequest } from "next/server"
import { createSupabaseServer } from "@/utils/supabase/supabase-server"

/**
 * OAuth 또는 매직링크 코드로 Supabase 세션을 교환
 * @param code Supabase에서 전달받은 인증 코드
 */
export async function exchangeCodeForSession(code: string) {
  try {
    const supabase = await createSupabaseServer()
    return await supabase.auth.exchangeCodeForSession(code)
  } catch (error) {
    console.error("[exchangeCodeForSession]", error)
    return { error, data: null }
  }
}

/**
 * 유저 ID로 users 테이블에서 is_admin 여부 조회
 * @param userId Supabase 유저 ID
 */
export async function getIsAdmin(userId: string) {
  try {
    const supabase = await createSupabaseServer()
    const { data } = await supabase.from("users").select("is_admin").eq("id", userId).single()
    return data?.is_admin ?? false
  } catch (error) {
    console.error("[getIsAdmin]", error)
    return false
  }
}

/**
 * 콜백 URL 파싱 (없으면 기본값 반환)
 */
export function getCallbackUrl(request: NextRequest, fallback = "/admin/dashboard") {
  const requestUrl = new URL(request.url)
  return requestUrl.searchParams.get("callbackUrl") || fallback
}

/**
 * 이메일/카카오 로그인 콜백 처리 (어드민 여부 체크 포함)
 * @param code Supabase 인증 코드
 * @returns { isAdmin: boolean, userId: string | null, error: any }
 */
export async function handleLoginCallback(code: string) {
  try {
    const { error, data } = await exchangeCodeForSession(code)
    if (error || !data?.session?.user) {
      return { isAdmin: false, userId: null, error }
    }
    const userId = data.session.user.id
    const email = data.session.user.email

    // users 테이블에 row가 없으면 자동 생성(동기화)
    const supabase = await createSupabaseServer()
    const { data: userRow } = await supabase.from("users").select("id").eq("id", userId).single()
    if (!userRow) {
      await supabase.from("users").insert([{ id: userId, email, is_admin: false }])
    }

    const isAdmin = await getIsAdmin(userId)
    return { isAdmin, userId, error: null }
  } catch (error) {
    console.error("[handleLoginCallback]", error)
    return { isAdmin: false, userId: null, error }
  }
}
