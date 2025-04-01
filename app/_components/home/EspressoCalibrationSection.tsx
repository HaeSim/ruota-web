export default function EspressoCalibrationSection() {
  return (
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
              매일 정성을 다해 에스프레소의 품질을 관리하며,
              <br />
              최상의 맛을 구현하기 위해 끊임없이 노력합니다.
              <br />
              각 원두의 고유한 특성을 살릴 수 있는 최고 품질의
              <br />
              에스프레소를 추구하는 것이 저희의 약속입니다.
              <br />
              고객님의 한 잔 한 잔이 소중합니다.
            </p>
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
              원두의 로스팅 날짜, 보관 상태, 그라인딩 입자 크기, 기압, 습도 등 다양한 요소에 의해 에스프레소의 맛과
              품질이 영향을 받을 수 있습니다. 저희는 이러한 변수를 고려하여 항상 최상의 맛을 제공해 드립니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
