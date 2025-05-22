// src/app/(login)/_config/types.ts

import type { LucideProps } from "lucide-react"
import type { ForwardRefExoticComponent } from "react"
import type react from "react"

/**
 * 메뉴 링크 타입 - URL 문자열
 * @example
 * - 기본 경로: "/dashboard", "/users"
 * - 동적 경로: "/users/[id]"
 * - 중첩 동적 경로: "/events/[eventId]/minting/[groupId]"
 * - Catch-all 경로: "/posts/[...slug]"
 */
export type MenuLink = string

/**
 * 메뉴 아이템 인터페이스
 * @property {string} title - 메뉴 제목
 * @property {ForwardRefExoticComponent} icon - Lucide 아이콘 컴포넌트 (선택사항)
 * @property {MenuLink} link - 메뉴 링크 URL (선택사항)
 * @property {string} category - 메뉴 카테고리 (선택사항) - 권한 제어에 사용
 * @property {Menu[]} menuList - 하위 메뉴 목록 (선택사항)
 */
export type Menu = {
  title: string
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>
  link?: MenuLink
  category?: string
  menuList?: Menu[]
}

/**
 * 동적 라우트 파라미터 타입
 * key: 파라미터 이름 (e.g., "id", "eventId")
 * value: 파라미터 값
 */
export type RouteParams = Map<string, string>

/**
 * 메뉴 노드 인터페이스
 * MenuNode 클래스의 인터페이스 정의
 */
export interface IMenuNode {
  title: Menu["title"]
  icon?: Menu["icon"]
  link?: MenuLink
  category?: Menu["category"]
  children: IMenuNode[]
  parent: IMenuNode | null
  params?: RouteParams
  parentParams?: RouteParams

  addChild(child: IMenuNode): void
  isRoot(): boolean
  isSame(node: IMenuNode): boolean
  getMenuHierarchy(): IMenuNode[]
  getCurrentNode(): IMenuNode | null
  getFullPath(): string
}
