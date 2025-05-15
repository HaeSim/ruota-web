import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "이용약관 | RUOTA 관리자",
  description: "RUOTA 커피 웹사이트 관리자 이용약관",
}

export default function TermsPage() {
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
        <h1 className="mb-6 text-center text-3xl font-bold text-stone-800">이용약관</h1>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <article className="prose max-w-none text-stone-700">
            <h2 className="text-xl font-semibold text-stone-800">제 1 조 (목적)</h2>
            <p>
              이 약관은 루오타 커피(이하 "회사")가 제공하는 웹사이트(이하 "서비스")의 이용조건 및 절차, 회사와 회원 간의
              권리, 의무, 책임사항 및 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">제 2 조 (용어의 정의)</h2>
            <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다:</p>
            <ol className="list-decimal pl-5">
              <li>
                "서비스"란 회사가 제공하는 모든 웹 서비스와 모바일 애플리케이션을 통해 회원이 이용할 수 있는 루오타 커피
                관련 제반 서비스를 의미합니다.
              </li>
              <li>
                "회원"이란 서비스에 접속하여 이 약관에 따라 회사와 이용계약을 체결하고, 회사가 제공하는 서비스를
                이용하는 고객을 말합니다.
              </li>
              <li>"관리자"란 서비스의 운영을 담당하고 관리하는 회사의 직원을 말합니다.</li>
            </ol>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">제 3 조 (약관의 효력 및 변경)</h2>
            <p>
              회사는 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. 약관이 변경될 경우 회사는 변경 사항을
              서비스 내 공지사항에 게시하며, 변경된 약관은 게시한 날로부터 7일 후부터 효력이 발생합니다.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">제 4 조 (이용계약의 체결)</h2>
            <p>
              이용계약은 회원이 되고자 하는 자가 약관의 내용에 동의하고 회사가 정한 양식에 따라 회원정보를 기입하여
              회원가입을 신청하고, 회사가 이를 승낙함으로써 체결됩니다.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">제 5 조 (서비스 이용)</h2>
            <p>회사는 회원에게 아래와 같은 서비스를 제공합니다:</p>
            <ul className="list-disc pl-5">
              <li>커피 케이터링 서비스 예약 및 관리</li>
              <li>회사 제품 및 서비스 정보 제공</li>
              <li>기타 회사가 추가 개발하거나 제휴를 통해 회원에게 제공하는 일체의 서비스</li>
            </ul>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">제 6 조 (책임제한)</h2>
            <p>
              회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지, 제3자의 불법 행위 등 회사의 합리적인 통제범위를
              벗어난 사유로 인한 서비스 제공 장애에 대해서는 책임을 지지 않습니다.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">제 7 조 (분쟁해결)</h2>
            <p>
              본 약관에 관한 분쟁은 대한민국 법률에 따라 규율되며, 회사와 회원 간에 발생한 분쟁에 대해서는
              민사소송법상의 관할법원에 소를 제기할 수 있습니다.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-stone-800">부칙</h2>
            <p>이 약관은 2023년 1월 1일부터 시행합니다.</p>
          </article>
        </div>

        <div className="mt-6 text-center">
          <Link href="/admin/privacy" className={cn(buttonVariants({ variant: "outline" }), "mx-2")}>
            개인정보처리방침
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
