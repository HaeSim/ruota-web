# Ruota 브랜드 홈페이지

## 소개

이 프로젝트는 Ruota 브랜드의 공식 웹사이트입니다. Next.js를 기반으로 한 모던하고 반응형 웹 애플리케이션입니다.

## 기술 스택

- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn-ui - 재사용 가능한 컴포넌트 라이브러리
- Radix UI
- Jest & React Testing Library
- Playwright

## 개발 환경 설정

### 필수 요구사항

- Node.js 18 이상
- pnpm 패키지 관리자

### pnpm 설치

```bash
# npm을 사용하여 전역으로 pnpm 설치
npm install -g pnpm

# pnpm 버전 확인
pnpm --version
```

### 프로젝트 설정

```bash
# 저장소 클론
git clone https://github.com/HaeSim/ruota-web.git
cd ruota-web

# 환경 변수 설정 (필요한 경우)
cp .env.example .env.local
```

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build
```

## 라이센스

MIT

## URL 네이밍 규칙

웹사이트의 모든 URL은 다음 규칙을 따릅니다:

1. 모든 URL은 소문자로 작성합니다.
2. 단어 사이는 하이픈(-)으로 구분합니다 (kebab-case).
3. 의미 있는 이름을 사용합니다.
4. URL은 간결하고 설명적이어야 합니다.

### URL 구조

- `/`: 메인 페이지
- `/menu`: 메뉴 소개 페이지
- `/drinks`: 음료 메뉴 페이지
- `/desserts`: 디저트 메뉴 페이지
- `/reservation`: 예약 관련 페이지
- `/reservation-guide`: 예약 가이드 페이지
- `/design-guide`: 디자인 가이드 페이지
- `/catering-service`: 케이터링 서비스 페이지
- `/about`: 회사 소개 페이지
- `/contact`: 연락처 페이지
- `/social`: 소셜 미디어 링크 페이지
