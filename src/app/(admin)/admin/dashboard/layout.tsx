import type { Metadata } from "next"
import { cookies } from "next/headers"
import KBar from "@/components/kbar"
import AppSidebar from "@/components/layout/app-sidebar"
import Header from "@/components/layout/header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: "대시보드 | RUOTA 관리자",
  description: "RUOTA 커피 웹사이트 관리자 대시보드",
}

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Persisting the sidebar state in the cookie.
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
  return (
    <KBar>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <Header />
          {/* page main content */}
          {children}
          {/* page main content ends */}
        </SidebarInset>
      </SidebarProvider>
    </KBar>
  )
}
