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
      const { error, data } = await supabase.auth.exchangeCodeForSession(code)

      if (!error && data.session?.user) {
        // 1. 현재 유저 id로 users 테이블에서 is_admin 조회
        const { data: userRow } = await supabase
          .from("users")
          .select("is_admin")
          .eq("id", data.session.user.id)
          .single()

        // 2. 어드민이 아니면 로그아웃 및 리디렉션
        if (!userRow?.is_admin) {
          // 가입 성공 안내 페이지로 이동하는 경우는 예외적으로 허용
          if (callbackUrl.startsWith("/admin/signup/success")) {
            const finalRedirectUrl = `${requestUrl.origin}${callbackUrl}`
            return NextResponse.redirect(finalRedirectUrl)
          }
          await supabase.auth.signOut()
          const redirectUrl = new URL("/admin", requestUrl.origin)
          redirectUrl.searchParams.set("error", "not_admin")
          return NextResponse.redirect(redirectUrl)
        }

        // 3. 어드민이면 기존대로 리디렉션
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
