"use client"
import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch } from "kbar"
import type { Action } from "kbar"
import { useRouter } from "next/navigation"
import { useMemo } from "react"
import { MENU_STRUCTURE } from "@/app/(1.admin)/constants/_menu-config/menuStructure"
import type { Menu } from "@/app/(1.admin)/constants/_menu-config/types"
import RenderResults from "./render-result"
import useThemeSwitching from "./use-theme-switching"

// Menu(MenuList 포함)를 kbar 액션 배열로 변환하는 유틸 함수
function menuToKbarActions(
  menuList: Menu[],
  parentTitle: string | null = null,
  router?: ReturnType<typeof useRouter>
): Action[] {
  return menuList.flatMap((menu) => {
    const actions: Action[] = []
    // link가 있는 경우만 액션으로 추가
    if (menu.link && router) {
      actions.push({
        id: `${menu.title.toLowerCase().replace(/\s+/g, "-")}-action`,
        name: menu.title,
        keywords: menu.title.toLowerCase(),
        section: parentTitle || "Navigation",
        subtitle: menu.link,
        perform: () => router.push(menu.link!),
      })
    }
    // 하위 메뉴(menuList)가 있으면 재귀적으로 변환
    if (menu.menuList && menu.menuList.length > 0) {
      actions.push(...menuToKbarActions(menu.menuList, menu.title, router))
    }
    return actions
  })
}

export default function KBar({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  // 신규 메뉴 구조 기반 액션 생성
  const actions = useMemo(() => {
    return menuToKbarActions(MENU_STRUCTURE, null, router)
  }, [router])

  return (
    <KBarProvider actions={actions}>
      <KBarComponent>{children}</KBarComponent>
    </KBarProvider>
  )
}
const KBarComponent = ({ children }: { children: React.ReactNode }) => {
  useThemeSwitching()

  return (
    <>
      <KBarPortal>
        <KBarPositioner className="bg-background/80 fixed inset-0 z-99999 p-0! backdrop-blur-sm">
          <KBarAnimator className="bg-card text-card-foreground relative mt-64! w-full max-w-[600px] -translate-y-12! overflow-hidden rounded-lg border shadow-lg">
            <div className="bg-card border-border sticky top-0 z-10 border-b">
              <KBarSearch className="bg-card w-full border-none px-6 py-4 text-lg outline-hidden focus:ring-0 focus:ring-offset-0 focus:outline-hidden" />
            </div>
            <div className="max-h-[400px]">
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </>
  )
}
