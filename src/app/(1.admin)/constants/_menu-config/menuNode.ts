// src/app/(login)/_config/menuNode.ts

import type { IMenuNode, Menu, MenuLink, RouteParams } from "./types"

/**
 * 메뉴 트리의 노드를 표현하는 클래스
 */
export class MenuNode implements IMenuNode {
  title: Menu["title"]
  icon?: Menu["icon"]
  link?: MenuLink
  category?: Menu["category"]
  children: MenuNode[]
  parent: MenuNode | null
  params?: RouteParams
  parentParams?: RouteParams

  /**
   * MenuNode 생성자
   * @param title - 메뉴 제목
   * @param icon - 메뉴 아이콘 (선택사항)
   * @param link - 메뉴 링크 (선택사항)
   * @param category - 메뉴 카테고리 (선택사항)
   * @param parent - 부모 노드 (선택사항)
   */
  constructor(
    title: Menu["title"],
    icon?: Menu["icon"],
    link?: MenuLink,
    category?: Menu["category"],
    parent: MenuNode | null = null
  ) {
    this.title = title
    this.icon = icon
    this.link = link
    this.category = category
    this.parent = parent
    this.children = []
    this.params = new Map()
    this.parentParams = new Map()
  }

  /**
   * 자식 노드 추가
   * @param child - 추가할 자식 노드
   */
  addChild(child: MenuNode): void {
    child.parent = this
    this.children.push(child)
  }

  /**
   * 현재 노드가 루트 노드인지 확인
   */
  isRoot(): boolean {
    return this.parent === null
  }

  /**
   * 다른 노드와 동일한지 비교
   * @param node - 비교할 노드
   */
  isSame(node: MenuNode): boolean {
    return this.link === node.link
  }

  /**
   * 링크에 파라미터를 적용하여 처리
   * @param link - 처리할 링크
   * @param params - 적용할 파라미터
   * @returns 파라미터가 적용된 링크
   */
  private processLinkWithParams(link: string, params?: RouteParams): string {
    let processedLink = link
    params?.forEach((value, key) => {
      processedLink = processedLink.replace(`[${key}]`, value)
    })
    return processedLink
  }

  /**
   * 현재 노드의 전체 경로 생성
   * 부모 노드들의 파라미터를 포함한 완전한 경로 반환
   */
  getFullPath(): string {
    if (!this.link) return ""

    let path = this.link
    let currentNode: MenuNode | null = this.parent

    // 부모 노드들의 파라미터를 포함한 전체 경로 생성
    while (currentNode && !currentNode.isRoot()) {
      if (currentNode.link) {
        const processedParentLink = this.processLinkWithParams(currentNode.link, currentNode.params)
        path = path.replace(new RegExp(`^${currentNode.link}`), processedParentLink)
      }
      currentNode = currentNode.parent
    }

    // 현재 노드의 파라미터로 최종 경로 생성
    return this.processLinkWithParams(path, this.params)
  }

  /**
   * 현재 노드의 상위 노드들의 계층 구조 반환
   * 각 노드에 필요한 파라미터 정보도 포함
   */
  getMenuHierarchy(): MenuNode[] {
    const hierarchy: MenuNode[] = []
    let currentNode: MenuNode | null = this.parent

    if (!currentNode) return []

    while (currentNode && !currentNode.isRoot()) {
      // 현재 노드의 params를 부모 노드들과 공유
      if (this.params?.size) {
        const relevantParams = new Map()
        // 부모 노드의 링크에 포함된 파라미터만 전달
        this.params.forEach((value, key) => {
          if (currentNode?.link?.includes(`[${key}]`)) {
            relevantParams.set(key, value)
          }
        })
        currentNode.params = relevantParams
      }
      hierarchy.unshift(currentNode)
      currentNode = currentNode.parent
    }

    return hierarchy
  }

  /**
   * 현재 노드 반환
   */
  getCurrentNode(): MenuNode | null {
    return this
  }
}
