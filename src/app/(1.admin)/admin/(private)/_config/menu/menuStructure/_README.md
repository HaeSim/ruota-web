# 메뉴 구조 및 URL 컨벤션 가이드

## 1. URL 구조 규칙

### 1.1 기본 패턴

```typescript
;/menu/abeeegrv / // 음료 목록
  menu /
  drink /
  create / // 음료 등록
  menu /
  drink /
  [drinkIdx] / // 음료 상세
  menu /
  drink /
  [drinkIdx] /
  edit // 음료 수정
```

### 1.2 중첩 리소스 패턴

```typescript
// 예: 소통관리 > 배너 > 상세
;/communication/abennr / // 배너 목록
  communication /
  banner /
  create / // 배너 등록
  communication /
  banner /
  [bannerIdx] / // 배너 상세
  communication /
  banner /
  [bannerIdx] /
  edit // 배너 수정
```

---

## 2. 동적 파라미터 네이밍 규칙

- `Idx`: 내부 시스템 식별자 (예: `drinkIdx`, `bannerIdx`)
- `Sequence`: 순차 번호가 의미 있는 경우 (예: `orderSequence`)
- `Id`: 외부 시스템 연동 식별자 (예: `userId`, `nftId`)

**금지:**

- 모호한 파라미터명(`pid`, `seq`, `id` 등)
- catch-all 라우트(`[...slug]`) 사용

---

## 3. 메뉴 구조 예시

### 올바른 예시

```typescript
{
  title: '메뉴관리',
  icon: List,
  menuList: [
    {
      title: '음료',
      link: '/menu/drink',
    },
    {
      title: '디저트',
      link: '/menu/dessert',
    },
  ],
}

{
  title: '소통관리',
  icon: Home,
  menuList: [
    {
      title: '배너',
      link: '/communication/banner',
    },
    {
      title: '팝업',
      link: '/communication/popup',
    },
  ],
}
```

### 잘못된 예시

```typescript
// ❌ 모호한 파라미터명
{
  title: '상세정보',
  link: '/menu/drink/[pid]'  // [drinkIdx]로 수정 필요
}

// ❌ catch-all 라우트 사용
{
  title: '상세정보',
  link: '/communication/banner/[...slug]'  // [bannerIdx]로 수정 필요
}
```

---

## 4. 기능별 URL 패턴

- **목록**: `/menu/drink`
- **생성**: `/menu/drink/create`
- **상세**: `/menu/drink/[drinkIdx]`
- **수정**: `/menu/drink/[drinkIdx]/edit`

---

## 5. 메뉴 타입 정의

```typescript
type Menu = {
  title: string
  icon?: Icon
  link?: string
  category?: string
  menuList?: Menu[]
}
```

---

## 6. 브레드크럼/계층 구조

- 각 메뉴 레벨은 독립적으로 접근 가능해야 함
- 상위 메뉴의 컨텍스트(파라미터 등)를 하위 메뉴에서 유지
- 동적 파라미터는 모든 하위 경로에서 일관되게 사용

---

## 7. 유지보수 체크리스트

- [ ] 파라미터명이 리소스 타입을 명확히 표현하는가?
- [ ] URL 구조가 리소스의 계층 관계를 반영하는가?
- [ ] 상위 메뉴의 파라미터가 하위 메뉴에 일관되게 포함되는가?
- [ ] CRUD 작업의 URL 패턴이 일관되게 적용되었는가?
- [ ] 브레드크럼 구현이 가능한 구조인가?

---

**이 가이드는 루오타 어드민의 메뉴 구조와 URL 설계의 일관성, 유지보수성, 확장성을 보장하기 위한 기준입니다.**
