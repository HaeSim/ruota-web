import { MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroCarousel from "./_components/HeroCarousel"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <HeroCarousel />

      {/* Quote Section */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-8 flex justify-center">
            <div className="h-16 w-16">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
                <g stroke="currentColor" strokeWidth="1">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line key={i} x1="50" y1="5" x2="50" y2="15" transform={`rotate(${i * 15} 50 50)`} />
                  ))}
                </g>
              </svg>
            </div>
          </div>
          <h2 className="mb-8 text-2xl font-medium text-stone-800">
            " The tilted cup will make your feeling better. "
          </h2>
          <p className="mb-4 text-sm text-stone-600">루오타의 시작은 커피였습니다.</p>
          <p className="mb-8 text-sm text-stone-600">
            일상적으로 마시는 한 잔의 커피라도 맛있는 커피를 마실 수 있도록 만드는 것,
            <br />
            가능하면 좋은 원두로써 커피의 가치를 이해할 수 있게 만들었습니다.
          </p>
          <p className="mb-4 text-sm text-stone-600">
            루오타 커피는 <span className="font-medium">에스프레소 추출방식</span>으로
            <br />
            깊은 <span className="font-medium">커피의 맛</span>을 추구합니다.
          </p>
          <p className="mb-8 text-sm text-stone-600">
            또 빵은 신선한 재료와 정성을 다해서만 만들어집니다.
            <br />
            가능한 첨가물 없이 맛있게 만들기 위해 노력하고 있습니다.
          </p>
          <p className="mb-8 text-sm text-stone-600">
            이제 루오타는 음료와 베이커리 그리고 더 넓은 범위의
            <br />
            식품 카테고리로 확장해나가고 있습니다.
          </p>
          <p className="mb-8 text-sm text-stone-600">
            원칙과 가치를 지키며
            <br />
            모든 제품에 정성과 노력 그리고 맛을 담겠습니다.
          </p>
        </div>
      </section>

      {/* Espresso Calibration Note */}
      <section className="bg-stone-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-stone-100 p-8">
              <h3 className="mb-4 text-2xl font-medium text-stone-800">
                Ruota Espresso
                <br />
                Calibration Note
              </h3>
              <p className="mb-4 text-sm text-stone-600">
                루오타의 바리스타들은
                <br />
                매일 정성스러게 에스프레소 품질을 맞추고 있고,
                <br />
                가장 맛있는 커피를 추출하기 위해 노력합니다.
                <br />
                원두마다 맛의 특성을 살릴 수 있는 최고품질의
                <br />
                에스프레소를 추구를 위해 항상 노력하겠습니다.
                <br />
                고객님들의 소중합니다.
              </p>
            </div>
            <div className="relative h-80 md:h-auto">
              <Image src="/placeholder.svg?height=600&width=800" alt="Espresso machine" fill className="object-cover" />
              <div className="absolute right-4 bottom-4">
                <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 backdrop-blur-sm">
                  <span className="text-xs text-stone-700">루오타 에스프레소</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-200">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Logo" width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calibration Table */}
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border-collapse text-xs text-stone-600">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="px-4 py-2 text-left">원두</th>
                  <th className="px-4 py-2 text-left">무게</th>
                  <th className="px-4 py-2 text-left">시간</th>
                  <th className="px-4 py-2 text-left">온도</th>
                  <th className="px-4 py-2 text-left">압력</th>
                  <th className="px-4 py-2 text-left">추출량</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-200">
                  <td className="px-4 py-2">블렌드</td>
                  <td className="px-4 py-2">18g</td>
                  <td className="px-4 py-2">30초</td>
                  <td className="px-4 py-2">93℃</td>
                  <td className="px-4 py-2">9bar</td>
                  <td className="px-4 py-2">40g</td>
                </tr>
                <tr className="border-b border-stone-200">
                  <td className="px-4 py-2">싱글오리진</td>
                  <td className="px-4 py-2">17g</td>
                  <td className="px-4 py-2">28초</td>
                  <td className="px-4 py-2">92℃</td>
                  <td className="px-4 py-2">9bar</td>
                  <td className="px-4 py-2">35g</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="text-xs text-stone-600">
              <p className="mb-4">* 추출 시간과 추출량은 원두의 상태에 따라 조금씩 달라질 수 있습니다.</p>
              <p>
                원두의 로스팅 날짜, 보관 상태, 그라인딩 입자 크기, 기압, 습도 등 다양한 요소에 의해 에스프레소 추출
                결과가 달라질 수 있습니다.
              </p>
            </div>
          </div>

          <div className="mt-8 text-right">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
              <span className="text-xs text-stone-700">루오타 에스프레소</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-200">
                <Image src="/placeholder.svg?height=24&width=24" alt="Logo" width={16} height={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Feature */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Column 1 */}
            <div>
              <div className="relative mb-4 h-64">
                <Image src="/placeholder.svg?height=400&width=600" alt="Coffee beans" fill className="object-cover" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-stone-800">취향에 따라 고르는 원두 & 다양 기능</h3>
              <p className="text-xs text-stone-600">
                루오타는 다양한 원두를 취급하고 있습니다. 고객님의 취향에 맞는 원두를 추천해 드립니다. 다양한 원두의
                특성을 살려 최상의 맛을 제공합니다.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <div className="relative mb-4 h-64">
                <Image src="/placeholder.svg?height=400&width=600" alt="Coffee cups" fill className="object-cover" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-stone-800">전문 바리스타의 핸드픽</h3>
              <p className="text-xs text-stone-600">
                루오타의 전문 바리스타들이 엄선한 원두만을 사용합니다. 최고의 맛을 위해 항상 노력하고 있습니다.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <div className="relative mb-4 h-64">
                <Image src="/placeholder.svg?height=400&width=600" alt="Coffee truck" fill className="object-cover" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-stone-800">루오타를 찾으시는 커피트럭 안내</h3>
              <p className="text-xs text-stone-600">
                루오타 커피트럭은 다양한 장소에서 만나보실 수 있습니다. 일정과 장소는 소셜미디어를 통해 확인하실 수
                있습니다.
              </p>
              <div className="mt-4 text-right">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5">
                  <span className="text-xs text-stone-700">루오타 에스프레소</span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-200">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Logo" width={16} height={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer */}
      <section className="bg-stone-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-xl font-medium">선주문/맞춤/케이터링 관련 문의</h2>
          <p className="mb-8 text-sm">
            루오타는 개인, 기업체, 이벤트를 위한 맞춤형 케이터링 서비스를 제공합니다.
            <br />
            특별한 날을 위한 특별한 커피와 디저트로 여러분의 행사를 빛내드립니다.
            <br />
            자세한 사항은 아래 연락처로 문의해 주세요.
          </p>
          <div className="mb-8 flex justify-center space-x-8">
            <Link href="#" className="flex flex-col items-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <span className="text-xs">카카오톡</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-white">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-xs">전화문의</span>
            </Link>
            <Link href="#" className="flex flex-col items-center">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs">이메일 문의</span>
            </Link>
          </div>
          <div className="text-right">
            <Image
              src="/placeholder.svg?height=40&width=160"
              alt="Signature"
              width={160}
              height={40}
              className="inline-block"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
