import { redirect } from "next/navigation"

/**
 * 어드민 로그인 페이지
 * /admin/signin 으로 리다이렉트
 */

export default function AdminAuthPage() {
  return redirect("/admin/signin")
}
