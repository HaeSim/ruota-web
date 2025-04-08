"use client"

import { Calendar, Home, Menu, MessageSquare, Utensils } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const menuItems = [
  { title: "홈", href: "/", icon: Home },
  { title: "메뉴", href: "/menu", icon: Utensils },
  { title: "예약", href: "/reservation", icon: Calendar },
  { title: "후기", href: "/catering-service", icon: MessageSquare },
  { title: "더보기", href: "/guide/design", icon: Menu },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed right-0 bottom-0 left-0 z-50 border-t bg-white md:hidden">
      <div className="flex h-16 items-center justify-around">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 px-2 py-2",
                isActive ? "text-stone-900" : "text-stone-500"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs">{item.title}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
