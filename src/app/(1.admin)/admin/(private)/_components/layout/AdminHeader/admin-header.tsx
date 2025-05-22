import React from "react"
import { Breadcrumbs } from "@/app/(1.admin)/admin/(private)/_components/layout/AdminHeader/breadcrumbs"
import SearchInput from "@/app/(1.admin)/admin/(private)/_components/layout/AdminHeader/search-input"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { UserNav } from "./user-nav"
import { ModeToggle } from "../../../../../../_components/ThemeToggle/theme-toggle"

export default function AdminHeader() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumbs />
      </div>

      <div className="flex items-center gap-2 px-4">
        <div className="hidden md:flex">
          <SearchInput placeholder="메뉴 또는 이벤트 검색..." />
        </div>
        <UserNav />
        <ModeToggle />
      </div>
    </header>
  )
}
