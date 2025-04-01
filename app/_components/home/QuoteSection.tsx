export default function QuoteSection() {
  return (
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
        <h2 className="mb-8 text-2xl font-medium text-stone-800">" The tilted cup will make your feeling better. "</h2>
        <p className="mb-4 text-sm text-stone-600">루오타의 여정은 커피에서 시작되었습니다.</p>
        <p className="mb-8 text-sm text-stone-600">
          평범한 일상 속 마시는 한 잔의 커피라도 최상의 맛을 경험하실 수 있도록,
          <br />
          그리고 좋은 원두를 통해 진정한 커피의 가치를 느끼실 수 있도록 루오타는 탄생했습니다.
        </p>
        <p className="mb-4 text-sm text-stone-600">
          루오타 커피는 <span className="font-medium">에스프레소 추출방식</span>을 고집하며
          <br />
          깊고 풍부한 <span className="font-medium">커피의 본질적인 맛</span>을 추구합니다.
        </p>
        <p className="mb-8 text-sm text-stone-600">
          또한 저희 베이커리는 신선한 재료와 정성을 담아 매일 새롭게 만들어집니다.
          <br />
          가능한 한 인공 첨가물 없이 자연 그대로의 맛을 구현하기 위해 끊임없이 연구합니다.
        </p>
        <p className="mb-8 text-sm text-stone-600">
          이제 루오타는 커피와 베이커리를 넘어
          <br />더 폭넓은 식품 카테고리로 영역을 확장해 나가고 있습니다.
        </p>
        <p className="mb-8 text-sm text-stone-600">
          변함없는 원칙과 가치를 지키며
          <br />
          모든 제품에 정성과 노력, 그리고 깊은 맛을 담아내겠습니다.
        </p>
      </div>
    </section>
  )
}
