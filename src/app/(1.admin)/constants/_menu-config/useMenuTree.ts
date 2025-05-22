// src/app/(login)/_config/useMenuTree.ts

import { usePathname } from "next/navigation"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { MenuNode } from "./menuNode"
import { MENU_STRUCTURE } from "./menuStructure"
import { convertToTree, findMenuNode } from "./menuTree"

/**
 * 메뉴 트리를 관리하고 현재 메뉴 상태를 제공하는 커스텀 훅
 * 메모이제이션을 통해 불필요한 재계산을 방지하고 성능을 최적화합니다.
 *
 * @returns {Object} 메뉴 트리 관련 상태와 유틸리티
 * @property {MenuNode} menuRoot - 메뉴 트리의 루트 노드
 * @property {MenuNode | null} currentMenuNode - 현재 활성화된 메뉴 노드
 * @property {MenuNode[]} currentMenuHierarchy - 현재 메뉴의 계층 구조
 * @property {string} currentFullPath - 현재 메뉴의 전체 경로
 * @property {(path: string) => MenuNode | null} findMenuNodeByPath - 특정 경로의 메뉴 노드를 찾는 함수
 */
export const useMenuTree = () => {
  const pathname = usePathname()
  const menuRootRef = useRef<MenuNode>(new MenuNode("Root"))
  const [isInitialized, setIsInitialized] = useState(false)

  // 메뉴 트리 초기화 함수 메모이제이션
  const initializeMenuTree = useCallback(() => {
    if (menuRootRef.current.children.length === 0) {
      try {
        convertToTree(MENU_STRUCTURE, menuRootRef.current)
        setIsInitialized(true)
      } catch (error) {
        console.error("Failed to initialize menu tree:", error)
      }
    }
  }, [])

  // 초기화 이펙트
  useEffect(() => {
    initializeMenuTree()
  }, [initializeMenuTree])

  /**
   * 현재 활성화된 메뉴 노드 메모이제이션
   * pathname이나 초기화 상태가 변경될 때만 재계산
   */
  const currentMenuNode = useMemo(() => {
    if (!isInitialized || !pathname) return null
    return findMenuNode(menuRootRef.current, pathname)
  }, [pathname, isInitialized])

  /**
   * 현재 메뉴의 계층 구조 메모이제이션
   * currentMenuNode가 변경될 때만 재계산
   */
  const currentMenuHierarchy = useMemo(() => {
    if (!currentMenuNode) return []
    return currentMenuNode.getMenuHierarchy()
  }, [currentMenuNode])

  /**
   * 현재 메뉴의 전체 경로 메모이제이션
   * currentMenuNode가 변경될 때만 재계산
   */
  const currentFullPath = useMemo(() => {
    if (!currentMenuNode) return ""
    return currentMenuNode.getFullPath()
  }, [currentMenuNode])

  /**
   * 메뉴 노드 검색 함수 메모이제이션
   * 함수 참조 안정성을 위해 useCallback 사용
   */
  const findMenuNodeByPath = useCallback(
    (path: string): MenuNode | null => {
      if (!isInitialized) return null
      return findMenuNode(menuRootRef.current, path)
    },
    [isInitialized]
  )

  /**
   * 현재 메뉴의 파라미터 메모이제이션
   * currentMenuNode가 변경될 때만 재계산
   */
  const currentParams = useMemo(() => {
    if (!currentMenuNode) return new Map()
    return currentMenuNode.params || new Map()
  }, [currentMenuNode])

  /**
   * 상위 메뉴의 파라미터 메모이제이션
   * currentMenuHierarchy가 변경될 때만 재계산
   */
  const parentParams = useMemo(() => {
    return currentMenuHierarchy.reduce((acc, node) => {
      if (node.params) {
        node.params.forEach((value, key) => {
          acc.set(key, value)
        })
      }
      return acc
    }, new Map())
  }, [currentMenuHierarchy])

  /**
   * 메뉴 상태 변경 감지 최적화
   * 이전 상태와 현재 상태를 비교하여 실제 변경이 있을 때만 업데이트
   */
  const menuState = useMemo(
    () => ({
      menuRoot: menuRootRef.current,
      currentMenuNode,
      currentMenuHierarchy,
      currentFullPath,
      currentParams,
      parentParams,
      findMenuNode: findMenuNodeByPath,
    }),
    [currentMenuNode, currentMenuHierarchy, currentFullPath, currentParams, parentParams, findMenuNodeByPath]
  )

  return menuState
}

/**
 * 사용 예시:
 *
 * function MyComponent() {
 *   const {
 *     currentMenuNode,
 *     currentMenuHierarchy,
 *     currentFullPath,
 *     currentParams,
 *     parentParams
 *   } = useMenuTree();
 *
 *   // currentParams: 현재 메뉴의 파라미터 (예: eventIdx, groupIdx 등)
 *   // parentParams: 상위 메뉴들의 모든 파라미터
 *   // currentFullPath: 현재 메뉴의 전체 경로 (파라미터 적용된 상태)
 *   // currentMenuHierarchy: 브레드크럼을 위한 메뉴 계층 구조
 * }
 */
