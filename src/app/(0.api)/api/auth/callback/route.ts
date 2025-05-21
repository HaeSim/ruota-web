import { NextRequest, NextResponse } from "next/server"
import { createSupabaseServer } from "@/utils/supabase/supabase-server"

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")
    // Supabase OAuth 요청에서 queryParams로 전달된 callbackUrl 가져오기
    const callbackUrl = requestUrl.searchParams.get("callbackUrl") || "/admin/dashboard/overview"

    if (code) {
      const supabase = await createSupabaseServer()
      const { error } = await supabase.auth.exchangeCodeForSession(code)

      if (!error) {
        // callbackUrl이 절대경로면 그대로, 상대경로면 origin을 붙임
        const isAbsolute = /^https?:\/\//.test(callbackUrl)
        const finalRedirectUrl = isAbsolute ? callbackUrl : `${requestUrl.origin}${callbackUrl}`

        return NextResponse.redirect(finalRedirectUrl)
      }
    }

    // 에러 발생 시 로그인 페이지로 리디렉션
    return NextResponse.redirect(new URL("/admin", requestUrl.origin))
  } catch (e) {
    console.error("Auth callback fatal error:", e)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
