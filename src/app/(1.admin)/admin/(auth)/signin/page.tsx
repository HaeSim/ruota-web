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
    redirect("/admin/dashboard/overview")
  }
  return <SignInViewPage />
}
