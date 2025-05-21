import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/admin/dashboard"
        className={cn(buttonVariants({ variant: "ghost" }), "absolute top-4 right-4 hidden md:top-8 md:right-8")}
      >
        로그인
      </Link>
      <div className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 overflow-hidden">
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline>
            <source src="/videos/coffee_machine_preview.webm" type="video/webm" />
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
      <div className="flex h-full items-center bg-stone-50 p-4 lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">{children}</div>
      </div>
    </div>
  )
}
