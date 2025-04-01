import Image from "next/image"

export default function ThreeColumnFeature() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1 */}
          <div>
            <div className="relative mb-6 aspect-square w-full">
              <Image src="/images/index/coffee_beans.webp" alt="Coffee beans" fill className="object-cover" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-stone-800">취향에 따라 3가지 원두 중 선택 가능</h3>
            <p className="text-sm text-stone-600">
              커피소비의 형태가 다양해지면서 우리의 커피취향도 다양해져왔습니다. 루오타에는 3가지 종류의 원두가 준비되어
              있습니다. 미디엄다크로스팅, 미디엄로스팅, 디카페인, 취향에 맞는 원두를 커스터마이징해보세요.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <div className="relative mb-6 aspect-square w-full">
              <Image src="/images/index/coffee_cup.webp" alt="Coffee cups" fill className="object-cover" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-stone-800">전문 바리스타의 정성어린 선택</h3>
            <p className="text-sm text-stone-600">
              루오타의 전문 바리스타들이 직접 테스트하고 엄선한 최상급 원두만을 사용합니다. 완벽한 한 잔의 커피를 위해
              끊임없이 연구하고 발전하는 루오타의 철학이 담겨있습니다.
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <div className="relative mb-6 aspect-square w-full">
              <Image src="/images/index/coffee_truck.webp" alt="Coffee truck" fill className="object-cover" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-stone-800">행사장을 빛내주는 커피바의 디자인</h3>
            <p className="text-sm text-stone-600">
              베이지톤의 외관과 원목의 질감을 잘 살려주는 브라운톤 커피바가 조화롭고, 높이가 낮은 커피머신을 정면
              배치하여 현장에서도 바리스타와의 소통이 가능합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
