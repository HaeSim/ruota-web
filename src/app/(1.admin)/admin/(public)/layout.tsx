import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { ADMIN_AUTH_VIDEO_SOURCES } from "@/components/admin-auth/AdminAuthVideoResources"
import { ModeToggle } from "@/components/layout/ThemeToggle/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AuthLayout({ children }: { children: ReactNode }) {
  // 서버 컴포넌트에서 랜덤 인덱스 선택 (SSR)
  const randomIndex = Math.floor(Math.random() * ADMIN_AUTH_VIDEO_SOURCES.length)
  const selectedVideoSrc = ADMIN_AUTH_VIDEO_SOURCES[randomIndex]
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="fixed top-4 right-4 z-50 md:top-8 md:right-8">
        <ModeToggle />
      </div>
      <Link
        href="/admin/dashboard"
        className={cn(buttonVariants({ variant: "ghost" }), "absolute top-16 right-4 hidden md:top-24 md:right-8")}
      >
        로그인
      </Link>
      <div className="bg-muted relative hidden h-full flex-col p-8 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 overflow-hidden">
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
            <source src={selectedVideoSrc} type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-stone-900/70" />
        </div>
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src="/images/_common/logo_light.webp" alt="RUOTA" width={96} height={30} className="mr-2" />
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;일상 속 커피 한 잔으로 오늘 하루의 기분이 조금 더 나아질 수 있도록! 루오타의 따뜻한 커피는 자극
              없이도 오래 기억됩니다.&rdquo;
            </p>
            <footer className="text-sm">RUOTA Coffee</footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full items-center bg-stone-50 p-4 lg:p-8 dark:bg-stone-900">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] dark:text-stone-100">
          {children}
        </div>
      </div>
    </div>
  )
}
