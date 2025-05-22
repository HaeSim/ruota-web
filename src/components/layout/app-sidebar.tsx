"use client"
import type { User } from "@supabase/supabase-js"
import {
  IconBell,
  IconChevronRight,
  IconChevronsDown,
  IconCircleCheck,
  IconCoffee,
  IconCreditCard,
  IconLogout,
} from "@tabler/icons-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import * as React from "react"
import { useMenuTree } from "@/app/(1.admin)/constants/_menu-config/useMenuTree"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useMediaQuery } from "@/hooks/use-media-query"
import { signOut } from "@/utils/supabase/auth-helpers.client"
import { createSupabaseBrowser } from "@/utils/supabase/supabase-browser"

export const company = {
  name: "루오타 커피",
  logo: IconCoffee,
  plan: "프리미엄",
}

export default function AppSidebar() {
  const pathname = usePathname()
  const { isOpen } = useMediaQuery()
  const [user, setUser] = useState<User | null>(null)
  const { menuRoot } = useMenuTree()

  useEffect(() => {
    createSupabaseBrowser()
      .auth.getUser()
      .then(({ data }) => {
        setUser(data.user)
      })
  }, [])

  React.useEffect(() => {
    // 사이드바 상태 변경에 기반한 부수 효과
  }, [isOpen])

  // 첫 번째 메뉴의 경로 (있으면)
  const firstMenuPath = menuRoot.children[0]?.getFullPath() || "/"

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* sidebar 축소 시, 아이콘 클릭하면 첫번째 메뉴로 이동 */}
            <Link href={isOpen ? "#" : firstMenuPath} tabIndex={isOpen ? -1 : 0} aria-label="메인으로 이동">
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="bg-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <IconCoffee className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">루오타</span>
                  <span className="text-muted-foreground text-xs">커피트럭</span>
                </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden">
        <SidebarGroup>
          <SidebarGroupLabel>루오타 관리</SidebarGroupLabel>
          <SidebarMenu>
            {menuRoot.children.map((node) => {
              const isActive = pathname.startsWith(node.getFullPath())
              const Icon = node.icon
              return node.children.length > 0 ? (
                <Collapsible key={node.title} asChild defaultOpen={isActive} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={node.title} isActive={isActive}>
                        {Icon && <Icon />}
                        <span>{node.title}</span>
                        <IconChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {node.children.map((subNode) => (
                          <SidebarMenuSubItem key={subNode.title}>
                            <SidebarMenuSubButton asChild isActive={pathname === subNode.getFullPath()}>
                              <Link href={subNode.getFullPath()}>
                                <span>{subNode.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={node.title}>
                  <SidebarMenuButton asChild tooltip={node.title} isActive={pathname === node.getFullPath()}>
                    <Link href={node.getFullPath()}>
                      {Icon && <Icon />}
                      <span>{node.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user?.user_metadata?.avatar_url || ""} alt={user?.user_metadata?.name || ""} />
                    <AvatarFallback className="rounded-lg">
                      {user?.user_metadata?.name?.slice(0, 2)?.toUpperCase() || "바리스타"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user?.user_metadata?.name || "바리스타"}</span>
                    <span className="truncate text-xs">{user?.email || "barista@ruota.co.kr"}</span>
                  </div>
                  <IconChevronsDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user?.user_metadata?.avatar_url || ""} alt={user?.user_metadata?.name || ""} />
                      <AvatarFallback className="rounded-lg">
                        {user?.user_metadata?.name?.slice(0, 2)?.toUpperCase() || "바리스타"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user?.user_metadata?.name || "바리스타"}</span>
                      <span className="truncate text-xs"> {user?.email || "barista@ruota.co.kr"}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <IconCircleCheck className="mr-2 h-4 w-4" />
                    바리스타 계정
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconCreditCard className="mr-2 h-4 w-4" />
                    판매 내역
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconBell className="mr-2 h-4 w-4" />
                    알림 설정
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={async () => {
                    await signOut()
                    location.reload()
                  }}
                >
                  <IconLogout className="mr-2 h-4 w-4" />
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
