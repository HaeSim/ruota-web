"use client"

import { Loader2 } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { signInWithOAuth } from "@/utils/supabase/auth-helpers.client"

interface KakaoAuthButtonProps {
  disabled?: boolean
  callbackUrl?: string
}

export default function KakaoAuthButton({ disabled, callbackUrl: propCallbackUrl }: KakaoAuthButtonProps) {
  const searchParams = useSearchParams()
  const callbackUrl = propCallbackUrl || searchParams.get("callbackUrl") || "/admin/dashboard/overview"
  const [isLoading, setIsLoading] = useState(false)

  const origin = typeof window !== "undefined" ? window.location.origin : ""
  const finalCallbackUrl = callbackUrl.startsWith("/") ? `${origin}${callbackUrl}` : callbackUrl
  const redirectTo = `${origin}/api/auth/callback?callbackUrl=${encodeURIComponent(finalCallbackUrl)}`

  const handleKakaoLogin = async () => {
    try {
      setIsLoading(true)
      await signInWithOAuth("kakao", redirectTo)
      // Supabase가 자동으로 카카오 인증 페이지로 리다이렉트합니다.
    } catch (error) {
      console.error("카카오 로그인 오류:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      className={cn(
        "w-full bg-[#FEE500] text-black hover:bg-[#ffe066]",
        "cursor-pointer",
        (disabled || isLoading) && "cursor-not-allowed opacity-70"
      )}
      type="button"
      disabled={disabled || isLoading}
      onClick={handleKakaoLogin}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          className="mr-2 h-4 w-4 fill-current"
        >
          <ellipse cx="12" cy="12" rx="12" ry="12" fill="#FEE500" />
          <path
            d="M12 6C7.58 6 4 8.69 4 12c0 2.02 1.41 3.78 3.54 4.81-.13.47-.48 1.77-.55 2.06 0 0-.01.03 0 .04.07.09.19.06.19.06.25-.03 2.38-1.57 2.77-1.83.68.1 1.39.16 2.05.16 4.42 0 8-2.69 8-6s-3.58-6-8-6z"
            fill="#391B1B"
          />
        </svg>
      )}
      카카오로 계속하기
    </Button>
  )
}
