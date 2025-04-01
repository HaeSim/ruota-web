import Image from "next/image"

export default function EspressoCalibrationSection() {
  return (
    <section className="bg-stone-50 py-20">
      {/* 이미지로 섹션 대체 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative aspect-[1880/1300] w-full">
          <Image
            src="/images/index/calibration.webp"
            alt="루오타 에스프레소 칼리브레이션 노트"
            fill
            sizes="(max-width: 768px) 100vw, 1300px"
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* SEO를 위한 숨겨진 컨텐츠 */}
      <div className="sr-only">
        <h3>Ruota Espresso Calibration Note</h3>
        <p>
          루오타의 바리스타들은 매일 정성을 다해 에스프레소의 품질을 관리하며, 최상의 맛을 구현하기 위해 끊임없이
          노력합니다. 각 원두의 고유한 특성을 살릴 수 있는 최고 품질의 에스프레소를 추구하는 것이 저희의 약속입니다.
          고객님의 한 잔 한 잔이 소중합니다.
        </p>

        {/* 칼리브레이션 테이블 정보 */}
        <table>
          <thead>
            <tr>
              <th>원두</th>
              <th>무게</th>
              <th>시간</th>
              <th>온도</th>
              <th>압력</th>
              <th>추출량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>블렌드</td>
              <td>18g</td>
              <td>30초</td>
              <td>93℃</td>
              <td>9bar</td>
              <td>40g</td>
            </tr>
            <tr>
              <td>싱글오리진</td>
              <td>17g</td>
              <td>28초</td>
              <td>92℃</td>
              <td>9bar</td>
              <td>35g</td>
            </tr>
          </tbody>
        </table>

        <p>* 추출 시간과 추출량은 원두의 상태에 따라 조금씩 달라질 수 있습니다.</p>
        <p>
          원두의 로스팅 날짜, 보관 상태, 그라인딩 입자 크기, 기압, 습도 등 다양한 요소에 의해 에스프레소의 맛과 품질이
          영향을 받을 수 있습니다. 저희는 이러한 변수를 고려하여 항상 최상의 맛을 제공해 드립니다.
        </p>
      </div>
    </section>
  )
}
