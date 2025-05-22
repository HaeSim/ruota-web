"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react"

type BreadcrumbItem = {
  title: string
  link: string
}

// This allows to add custom title as well
const routeMapping: Record<string, BreadcrumbItem[]> = {
  "/dashboard": [{ title: "대시보드", link: "/dashboard" }],
  "/dashboard": [
    { title: "대시보드", link: "/dashboard" },
    { title: "개요", link: "/dashboard" },
  ],
  "/dashboard/product": [
    { title: "대시보드", link: "/dashboard" },
    { title: "메뉴 관리", link: "/dashboard/product" },
  ],
  "/dashboard/profile": [
    { title: "대시보드", link: "/dashboard" },
    { title: "바리스타 프로필", link: "/dashboard/profile" },
  ],
  "/dashboard/kanban": [
    { title: "대시보드", link: "/dashboard" },
    { title: "예약 관리", link: "/dashboard/kanban" },
  ],
  "/dashboard/events": [
    { title: "대시보드", link: "/dashboard" },
    { title: "이벤트 일정", link: "/dashboard/events" },
  ],
  "/dashboard/inventory": [
    { title: "대시보드", link: "/dashboard" },
    { title: "원두 재고", link: "/dashboard/inventory" },
  ],
  // Add more custom mappings as needed
}

export function useBreadcrumbs() {
  const pathname = usePathname()

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname]
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split("/").filter(Boolean)
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path,
      }
    })
  }, [pathname])

  return breadcrumbs
}
