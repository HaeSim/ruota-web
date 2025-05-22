import { NextRequest, NextResponse } from "next/server"
import { createSupabaseServer } from "@/utils/supabase/supabase-server"
import { getCallbackUrl, handleLoginCallback } from "./service/auth-callback.service"

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")
    const callbackUrl = getCallbackUrl(request)

    if (!code) {
      // code 없음: 로그인 페이지로 리디렉션
      return NextResponse.redirect(new URL("/admin/signin?error=missing_code", requestUrl.origin))
    }

    // 로그인 콜백 처리 (어드민 여부 포함)
    const { isAdmin, error } = await handleLoginCallback(code)

    if (error) {
      // 인증 실패 또는 예외 발생 시 로그인 페이지로 리디렉션
      return NextResponse.redirect(new URL(`/admin/signin?error=auth_failed`, requestUrl.origin))
    }

    // 어드민이 아니면 로그아웃 및 안내 메시지 전달
    if (!isAdmin) {
      try {
        const supabase = await createSupabaseServer()
        await supabase.auth.signOut()
      } catch (logoutError) {
        console.error("[Auth Callback] Logout error:", logoutError)
      }
      return NextResponse.redirect(new URL("/admin/signin?error=not_admin", requestUrl.origin))
    }

    // 어드민이면 콜백 URL로 리디렉션
    return NextResponse.redirect(new URL(callbackUrl, requestUrl.origin))
  } catch (e) {
    console.error("Auth callback fatal error:", e)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
