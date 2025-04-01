import Image from "next/image"

export default function ThreeColumnFeature() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1 */}
          <div>
            <div className="relative mb-4 h-64">
              <Image src="/placeholder.svg?height=400&width=600" alt="Coffee beans" fill className="object-cover" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-stone-800">취향에 맞춘 다양한 원두 & 특별한 커피 경험</h3>
            <p className="text-xs text-stone-600">
              루오타는 엄선된 다양한 원두를 제공합니다. 고객님 개인의 취향과 기호에 꼭 맞는 원두를 추천해 드리며, 각
              원두의 고유한 풍미와 특성을 최대한 살려 최상의 커피 경험을 선사합니다.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <div className="relative mb-4 h-64">
              <Image src="/placeholder.svg?height=400&width=600" alt="Coffee cups" fill className="object-cover" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-stone-800">전문 바리스타의 정성어린 선택</h3>
            <p className="text-xs text-stone-600">
              루오타의 전문 바리스타들이 직접 테스트하고 엄선한 최상급 원두만을 사용합니다. 완벽한 한 잔의 커피를 위해
              끊임없이 연구하고 발전하는 루오타의 철학이 담겨있습니다.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <div className="relative mb-4 h-64">
              <Image src="/placeholder.svg?height=400&width=600" alt="Coffee truck" fill className="object-cover" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-stone-800">어디서나 만나는 루오타 커피트럭</h3>
            <p className="text-xs text-stone-600">
              루오타 커피트럭은 다양한 장소에서 여러분을 찾아갑니다. 축제, 행사, 마켓 등 다양한 장소에서 루오타의 특별한
              커피를 만나보세요. 커피트럭 일정과 위치는 소셜미디어 채널을 통해 실시간으로 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
