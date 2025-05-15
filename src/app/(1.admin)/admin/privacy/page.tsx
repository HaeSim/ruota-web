import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "개인정보처리방침 | RUOTA 관리자",
  description: "RUOTA 커피 웹사이트 관리자 개인정보처리방침",
}

export default function PrivacyPage() {
  return (
    <div className="relative h-screen overflow-auto bg-stone-50 p-6 md:p-10">
      <Link
        href="/admin"
        className={cn(buttonVariants({ variant: "ghost" }), "absolute top-4 left-4 md:top-8 md:left-8")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        돌아가기
      </Link>

      <div className="mx-auto mt-16 max-w-3xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-stone-800">개인정보처리방침</h1>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <article className="prose max-w-none text-stone-700">
            <p>
              루오타 커피(이하 '회사')는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」을 준수하기 위하여 노력하고
              있습니다. 회사는 개인정보처리방침을 통하여 회사가 이용자로부터 수집하는 개인정보의 항목, 개인정보의 수집
              및 이용목적, 개인정보의 보유 및 이용기간, 개인정보의 제3자 제공 등에 관한 사항을 이용자에게 안내하고
              있습니다.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">1. 수집하는 개인정보 항목</h2>
            <p>회사는 서비스 제공을 위해 다음과 같은 개인정보를 수집하고 있습니다:</p>
            <ul className="list-disc pl-5">
              <li>필수항목: 이름, 이메일 주소, 연락처</li>
              <li>선택항목: 회사명, 부서, 직책</li>
              <li>서비스 이용 과정에서 생성되는 정보: IP 주소, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록</li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">2. 개인정보의 수집 및 이용목적</h2>
            <p>회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다:</p>
            <ul className="list-disc pl-5">
              <li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금 정산</li>
              <li>회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별, 불량회원의 부정 이용 방지</li>
              <li>마케팅 및 광고에 활용: 이벤트 등 광고성 정보 전달, 접속 빈도 파악, 서비스 이용에 대한 통계</li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">3. 개인정보의 보유 및 이용기간</h2>
            <p>
              이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의
              정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <b>관련법령에 의한 정보보유</b>
                <p>
                  상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우
                  회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                </p>
              </li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">4. 개인정보의 파기절차 및 방법</h2>
            <p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.</p>
            <p>파기절차 및 방법은 다음과 같습니다:</p>
            <ul className="list-disc pl-5">
              <li>
                <b>파기절차</b>
                <p>
                  이용자가 서비스 이용 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의
                  서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간
                  저장된 후 파기됩니다.
                </p>
              </li>
              <li>
                <b>파기방법</b>
                <p>
                  전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에
                  출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                </p>
              </li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">5. 개인정보 제공</h2>
            <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다:</p>
            <ul className="list-disc pl-5">
              <li>이용자들이 사전에 동의한 경우</li>
              <li>
                법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
              </li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">6. 이용자 및 법정대리인의 권리와 그 행사방법</h2>
            <p>
              이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나
              수정할 수 있으며, 회사의 개인정보의 처리에 동의하지 않는 경우 동의를 거부하거나 가입해지(회원탈퇴)를
              요청하실 수 있습니다. 다만, 그러한 경우 서비스의 일부 또는 전부 이용이 어려울 수 있습니다.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">
              7. 개인정보 자동수집 장치의 설치/운영 및 거부에 관한 사항
            </h2>
            <p>
              회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를
              사용합니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는 아주 작은 텍스트
              파일로 이용자 컴퓨터의 하드디스크에 저장됩니다.
            </p>
            <p>
              이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 설정함으로써
              모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도
              있습니다.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">8. 개인정보 보호책임자</h2>
            <p>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제
              등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:
            </p>
            <ul className="list-none pl-5">
              <li>• 개인정보 보호책임자: 김수영</li>
              <li>• 연락처: 010-7118-0228</li>
              <li>• 이메일: ruota_espresso@naver.com</li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">9. 개정 이력</h2>
            <p>이 개인정보처리방침은 2023년 1월 1일부터 적용됩니다.</p>
          </article>
        </div>

        <div className="mt-6 text-center">
          <Link href="/admin/terms" className={cn(buttonVariants({ variant: "outline" }), "mx-2")}>
            이용약관
          </Link>
          <Link
            href="/admin/dashboard"
            className={cn(buttonVariants({ variant: "default" }), "mx-2 bg-stone-800 hover:bg-stone-900")}
          >
            대시보드로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  )
}
