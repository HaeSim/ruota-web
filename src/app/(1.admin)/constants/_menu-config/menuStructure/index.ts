import { communicationMenu } from "./communication"
import { dashboardMenu } from "./dashboard"
import { menuManageMenu } from "./menu"
import { reservationMenu } from "./reservation"
import { salesMenu } from "./sales"
import type { Menu } from "../types"
/**
 * 전체 메뉴 구조
 * @description 어드민 메인 메뉴의 구조를 정의합니다.
 */
export const MENU_STRUCTURE: Menu[] = [dashboardMenu, menuManageMenu, reservationMenu, salesMenu, communicationMenu]

/**
 * 메뉴 구조 개요
 *
 * 1. 홈/대시보드
 *    - 대시보드
 *
 * 2. 메뉴 관리
 *    - 음료
 *    - 디저트
 * 3. 예약 관리
 * 4. 매출관리
 * 5. 소통관리
 *    - 배너
 *    - 팝업
 *
 * URL 패턴 규칙:
 * 1. 기본 구조
 *    /{버전}/{섹션}/{리소스}
 *
 * 2. CRUD 작업
 *    - 목록: /{리소스}
 *    - 생성: /{리소스}/create
 *    - 상세: /{리소스}/[{리소스}Idx]
 *    - 기능: /{리소스}/[{리소스}Idx]/{기능}
 *
 * 3. 중첩 리소스
 *    /{상위리소스}/[{상위리소스}Idx]/{하위리소스}
 *
 * 4. 동적 파라미터 명명 규칙
 *    - 일반 식별자: [resourceIdx]
 *    - 순차 번호: [resourceSequence]
 *    - 외부 연동: [resourceId]
 */
