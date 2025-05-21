import { NextRequest, NextResponse } from "next/server"
import { createSupabaseServer } from "@/utils/supabase/supabase-server"

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const callbackUrl = requestUrl.searchParams.get("callbackUrl") || "/admin/dashboard/overview"

  console.log("Kakao login initiated, callbackUrl=", callbackUrl)

  const supabase = await createSupabaseServer()

  // origin 설정 (개발 환경에서는 요청 헤더의 origin 사용)
  const origin = process.env.NEXT_PUBLIC_ORIGIN || request.headers.get("origin") || requestUrl.origin
  const redirectTo = `${origin}/api/auth/callback`

  console.log("OAuth redirectTo=", redirectTo)

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo,
      scopes: "profile_nickname profile_image",
      queryParams: {
        callbackUrl,
      },
    },
  })

  if (error) {
    console.error("Kakao OAuth error:", error.message)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  console.log("Kakao OAuth URL generated:", data.url)
  return NextResponse.json({ url: data.url }, { status: 200 })
}
