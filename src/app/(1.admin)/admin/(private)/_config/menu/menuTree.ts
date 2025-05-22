// src/app/(login)/_config/menuTree.ts

import { MenuNode } from "./menuNode"
import type { Menu } from "./types"

/**
 * 주어진 경로 패턴과 실제 경로를 매칭하여 동적 라우트 파라미터 추출
 * @param linkPattern - 메뉴에 정의된 경로 패턴 (e.g., "/users/[id]/posts/[postId]")
 * @param path - 실제 URL 경로 (e.g., "/users/123/posts/456")
 * @returns 매칭된 파라미터 Map 또는 매칭 실패시 null
 */
const matchDynamicRoute = (linkPattern: string, path: string): Map<string, string> | null => {
  // catch-all 라우트([...slug])와 동적 세그먼트([paramName])를 정규식 패턴으로 변환
  const regexPattern = linkPattern.replace(/\[\.\.\..*?\]/g, ".*").replace(/\[.*?\]/g, "([^/]+)")
  const regex = new RegExp(`^${regexPattern}$`)

  // 경로 매칭
  const match = path.match(regex)
  if (!match) return null

  // 파라미터 이름과 값을 추출하여 Map으로 반환
  const params = new Map<string, string>()
  const paramMatches = Array.from(linkPattern.matchAll(/\[(.*?)\]/g))
  const paramNames = paramMatches
    .map((m) => m[1])
    .filter(
      (name): name is string => name !== undefined && !name.startsWith("...") // catch-all 파라미터 제외
    )

  paramNames.forEach((name, i) => {
    const value = match[i + 1]
    if (value) {
      params.set(name, value)
    }
  })

  return params
}

/**
 * 메뉴 구조를 트리로 변환
 * @param menuItems - 변환할 메뉴 아이템 배열
 * @param parentNode - 부모 노드
 */
export function convertToTree(menuItems: Menu[], parentNode: MenuNode): void {
  menuItems.forEach((item) => {
    const node = new MenuNode(item.title, item.icon, item.link, item.category, parentNode)

    if (item.menuList?.length) {
      convertToTree(item.menuList, node)
    }

    parentNode.addChild(node)
  })
}

/**
 * 주어진 경로에 해당하는 메뉴 노드 찾기
 * @param node - 검색을 시작할 노드
 * @param pathname - 찾고자 하는 경로
 * @returns 찾은 메뉴 노드 또는 null
 */
export function findMenuNode(node: MenuNode, pathname: string): MenuNode | null {
  // 현재 노드 확인
  if (node.link) {
    // 정확한 경로 매칭
    const fullPath = node.getFullPath()
    if (fullPath === pathname) {
      return node
    }

    // 동적 라우트 매칭
    if (node.link.includes("[")) {
      try {
        const params = matchDynamicRoute(node.link, pathname)
        if (params) {
          node.params = params

          // 부모 노드들에게 관련된 파라미터 전파
          let currentNode = node.parent
          while (currentNode && !currentNode.isRoot()) {
            const relevantParams = new Map<string, string>()
            params.forEach((value, key) => {
              if (currentNode?.link?.includes(`[${key}]`)) {
                relevantParams.set(key, value)
              }
            })
            currentNode.params = relevantParams
            currentNode = currentNode.parent
          }

          return node
        }
      } catch (error) {
        console.error("Error matching dynamic route:", error)
        return null
      }
    }
  }

  // 자식 노드들 검색
  for (const child of node.children) {
    const found = findMenuNode(child, pathname)
    if (found) {
      return found
    }
  }

  return null
}
