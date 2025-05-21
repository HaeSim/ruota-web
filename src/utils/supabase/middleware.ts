import { createServerClient } from "@supabase/ssr"
import { type NextRequest, NextResponse } from "next/server"

/**
 * SSR 미들웨어에서 Supabase 인증 세션을 갱신하고, 인증 상태에 따라 라우팅을 제어합니다.
 * - 보호된 라우트 접근 시 인증 필요
 * - OAuth 콜백 처리 및 세션 갱신
 */
export async function updateSession(request: NextRequest) {
  // 응답 객체 생성 (요청 전달)
  const response = NextResponse.next({
    request,
  })

  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get("code")

  // OAuth 코드가、있는지 확인 (카카오 등 OAuth 인증 후 리디렉션)
  if (code) {
    console.log("OAuth code detected in middleware:", code)
  }

  // Supabase 서버 클라이언트 생성
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // 요청에서 모든 쿠키 가져오기
        getAll() {
          return request.cookies.getAll()
        },
        // 응답에 쿠키 설정
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            // 요청 쿠키에도 설정 (서버 내부 처리용)
            request.cookies.set(name, value)
            // 응답 쿠키에 설정 (클라이언트 전달용)
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  // CRITICAL: createServerClient와 getUser() 호출 사이에 로직 추가하지 말 것
  // 세션 갱신 (미들웨어에서 가장 중요한 부분)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // 현재 URL 경로
  const { pathname } = request.nextUrl

  // OAuth 인증 코드가 있고 루트 경로('/')에 있는 경우 대시보드로 리디렉션
  if (code && pathname === "/") {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/admin/dashboard/overview"
    console.log("OAuth code detected at root path, redirecting to dashboard")
    return NextResponse.redirect(redirectUrl)
  }

  // 보호된 라우트 처리: /admin/dashboard로 시작하는 URL은 인증 필요
  // 그룹 라우트 정보: (auth)와 (signin)은 URL에서 제외됨, 실제 URL은 /admin
  if (!user && pathname.startsWith("/admin/dashboard")) {
    // 인증 안된 경우 로그인 페이지로 리디렉션
    const redirectUrl = request.nextUrl.clone()

    // 올바른 리디렉션 URL: /admin
    redirectUrl.pathname = "/admin"

    // 원래 접근하려던 URL을 쿼리 파라미터로 저장 (로그인 후 리디렉션용)
    redirectUrl.searchParams.set("callbackUrl", pathname)

    return NextResponse.redirect(redirectUrl)
  }

  // 로그인 성공 시 대시보드로 리디렉션
  // /admin은 (auth)/(signin) 그룹 라우트의 실제 URL
  if (user && pathname === "/admin") {
    const redirectUrl = request.nextUrl.clone()

    // 콜백 URL이 있으면 해당 URL로, 없으면 대시보드로
    const callbackUrl = request.nextUrl.searchParams.get("callbackUrl")
    redirectUrl.pathname = callbackUrl || "/admin/dashboard/overview"

    return NextResponse.redirect(redirectUrl)
  }

  // CRITICAL: 반드시 원본 응답 객체 반환 (쿠키 상태 유지를 위해)
  return response
}
