# 메뉴 구조 설계 가이드

## 개요

이 문서는 관리자 웹 애플리케이션의 메뉴 구조 설계와 구현에 대한 기술 문서입니다. 트리 구조를 기반으로 한 메뉴 시스템과 동적 라우팅 처리 방식을 상세히 설명합니다.

## 핵심 아키텍처

### 1. 메뉴 트리 구조

#### 1.1 노드 설계

```typescript
class MenuNode {
  title: string // 메뉴 제목
  icon?: Icon // 메뉴 아이콘
  link?: string // 라우트 경로
  category?: string // 권한 카테고리
  children: MenuNode[] // 하위 메뉴 노드
  parent: MenuNode | null // 상위 메뉴 노드
  params?: RouteParams // 현재 노드 파라미터
  parentParams?: RouteParams // 상위 노드 파라미터
}
```

#### 1.2 트리 구조의 장점

1. **계층적 데이터 표현**

   - 메뉴의 부모-자식 관계를 자연스럽게 표현
   - 브레드크럼 생성이 용이
   - 메뉴 탐색의 효율성 향상

2. **상태 전파**

   - 상위 메뉴의 파라미터를 하위 메뉴에 자동 전파
   - 동적 라우트 파라미터의 일관성 유지

3. **확장성**
   - 새로운 메뉴 추가가 용이
   - 메뉴 구조 변경이 유연

### 2. 동적 라우트 처리 시스템

#### 2.1 라우트 매칭 엔진

```typescript
function matchDynamicRoute(
  pattern: string, // 예: '/users/[id]/posts/[postId]'
  path: string // 예: '/users/123/posts/456'
): RouteParams | null {
  // 1. 패턴을 정규식으로 변환
  const regexPattern = pattern.replace(/\[\.\.\..*?\]/g, ".*").replace(/\[.*?\]/g, "([^/]+)")

  // 2. 경로 매칭 실행
  const match = path.match(new RegExp(`^${regexPattern}$`))

  // 3. 파라미터 추출 및 매핑
  return extractParams(pattern, match)
}
```

#### 2.2 파라미터 전파 메커니즘

```typescript
class MenuNode {
  // 파라미터 전파 로직
  propagateParams(params: RouteParams): void {
    let current = this.parent
    while (current && !current.isRoot()) {
      const relevantParams = filterRelevantParams(params, current.link)
      current.params = relevantParams
      current = current.parent
    }
  }
}
```

### 3. 메뉴 트리 작동 원리

#### 3.1 트리 초기화 프로세스

```typescript
function initializeMenuTree() {
  // 1. 루트 노드 생성
  const menuRoot = new MenuNode("Root")

  // 2. 메뉴 구조를 트리로 변환
  convertToTree(MENU_STRUCTURE, menuRoot)

  // 3. 동적 파라미터 초기화
  initializeParams(menuRoot)

  return menuRoot
}
```

#### 3.2 노드 탐색 알고리즘

```typescript
function findMenuNode(node: MenuNode, pathname: string): MenuNode | null {
  // 1. 현재 노드 확인
  if (isMatchingNode(node, pathname)) {
    return node
  }

  // 2. 동적 라우트 매칭 시도
  if (hasDynamicSegments(node.link)) {
    const params = matchDynamicRoute(node.link, pathname)
    if (params) {
      node.params = params
      node.propagateParams(params)
      return node
    }
  }

  // 3. 자식 노드 재귀 탐색
  for (const child of node.children) {
    const found = findMenuNode(child, pathname)
    if (found) return found
  }

  return null
}
```

### 4. 실제 사용 사례

#### 4.1 기본 사용

```typescript
function NavigationMenu() {
  const {
    currentMenuNode,
    currentMenuHierarchy
  } = useMenuTree();

  // 브레드크럼 렌더링
  const renderBreadcrumb = () => {
    return currentMenuHierarchy.map(node => (
      <BreadcrumbItem
        key={node.link}
        href={node.getFullPath()}
      >
        {node.title}
      </BreadcrumbItem>
    ));
  };
}
```

#### 4.2 동적 파라미터 처리 예시

```typescript
// 이벤트 상세 페이지의 민팅 그룹 목록
// URL: /nft/eventManagement/123/minting-group

function EventMintingGroups() {
  const { currentMenuNode } = useMenuTree()

  // 상위 경로의 eventIdx 파라미터 접근
  const eventIdx = currentMenuNode?.params?.get("eventIdx")

  useEffect(() => {
    if (eventIdx) {
      fetchMintingGroups(eventIdx)
    }
  }, [eventIdx])
}
```
