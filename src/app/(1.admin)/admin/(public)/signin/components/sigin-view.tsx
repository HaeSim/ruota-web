import Link from "next/link"
import UserAuthForm from "./user-auth-form"

export default function SignInViewPage() {
  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-stone-800 dark:text-stone-100">관리자 계정 로그인</h1>
        <p className="text-sm text-stone-600 dark:text-stone-400">계정 이메일을 입력해주세요</p>
      </div>
      <UserAuthForm />
      <p className="px-8 text-center text-sm text-stone-500 dark:text-stone-400">
        계속 진행하시면 루오타의{" "}
        <Link
          href="/admin/terms"
          className="underline underline-offset-4 hover:text-stone-800 dark:hover:text-stone-100"
        >
          이용약관
        </Link>{" "}
        및{" "}
        <Link
          href="/admin/privacy"
          className="underline underline-offset-4 hover:text-stone-800 dark:hover:text-stone-100"
        >
          개인정보처리방침
        </Link>
        에 동의하게 됩니다.
      </p>
    </>
  )
}
