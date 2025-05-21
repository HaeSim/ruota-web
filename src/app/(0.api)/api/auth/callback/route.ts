import { NextRequest, NextResponse } from "next/server"
import { createSupabaseServer } from "@/utils/supabase/supabase-server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")
  // Supabase OAuth 요청에서 queryParams로 전달된 callbackUrl 가져오기
  const callbackUrl = requestUrl.searchParams.get("callbackUrl") || "/admin/dashboard/overview"

  console.log("Auth Callback: code=", code, "callbackUrl=", callbackUrl)

  if (code) {
    const supabase = await createSupabaseServer()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    console.log("Session exchange result:", error ? `Error: ${error.message}` : "성공")

    if (!error) {
      // 개발 환경인지 확인
      const isLocalEnv = process.env.NODE_ENV === "development"
      const origin = isLocalEnv ? requestUrl.origin : process.env.NEXT_PUBLIC_ORIGIN || requestUrl.origin

      // 최종 리디렉션 URL
      const finalRedirectUrl = `${origin}${callbackUrl}`
      console.log("Redirecting to:", finalRedirectUrl)

      return NextResponse.redirect(finalRedirectUrl)
    }
  }

  // 에러 발생 시 로그인 페이지로 리디렉션
  console.log("Auth callback failed, redirecting to login page")
  return NextResponse.redirect(new URL("/admin", requestUrl.origin))
}
