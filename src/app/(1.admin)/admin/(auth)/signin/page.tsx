import { redirect } from "next/navigation"

import { createSupabaseServer } from "@/utils/supabase/supabase-server"
import SignInViewPage from "./components/sigin-view"

export const metadata = {
  title: "로그인 | RUOTA 관리자",
  description: "RUOTA 커피 웹사이트 관리자 로그인",
}

/**
 * 로그인 페이지 (SSR)
 * - 이미 로그인된 경우 대시보드로 리디렉션
 */
export default async function Page() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user) {
    // is_admin 여부 확인
    const { data: userRow } = await supabase.from("users").select("is_admin").eq("id", user.id).single()

    if (userRow?.is_admin) {
      redirect("/admin/dashboard/overview")
    }
    // 관리자가 아니면 로그인 페이지 노출 (혹은 안내 메시지)
    // 필요시, 쿼리 파라미터로 에러 메시지 전달
    // return redirect(`/admin/signin?error=not_admin`)
  }
  return <SignInViewPage />
}
