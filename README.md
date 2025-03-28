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
