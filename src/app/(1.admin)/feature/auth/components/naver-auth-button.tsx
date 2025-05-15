"use client"

import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NaverSignInButtonProps {
  disabled?: boolean
}

export default function NaverSignInButton({ disabled }: NaverSignInButtonProps) {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")

  return (
    <Button
      className={cn(
        "w-full bg-[#03C75A] text-white hover:bg-[#02b351]",
        "cursor-pointer",
        disabled && "cursor-not-allowed opacity-70"
      )}
      type="button"
      disabled={disabled}
      onClick={() => signIn("naver", { callbackUrl: callbackUrl ?? "/dashboard" })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        className="mr-2 h-4 w-4 fill-current"
      >
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
      </svg>
      네이버로 계속하기
    </Button>
  )
}
