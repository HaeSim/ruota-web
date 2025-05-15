import { Metadata } from "next"
import SignInViewPage from "@/app/(1.admin)/feature/auth/components/sigin-view"

export const metadata: Metadata = {
  title: "로그인 | RUOTA 관리자",
  description: "RUOTA 커피 웹사이트 관리자 로그인",
}

export default async function Page() {
  return <SignInViewPage />
}
