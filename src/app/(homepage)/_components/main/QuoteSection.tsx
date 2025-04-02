"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry && entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="bg-stone-100 py-20 text-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          ref={imageRef}
          className={`mb-8 flex justify-center transition-transform duration-1000 ${
            isVisible ? "rotate-0" : "rotate-54"
          }`}
        >
          <Image src="/images/index/ruota_wheel.webp" alt="굴러가는 바퀴 속 기울어진 잔" width={150} height={150} />
        </div>
        <h2 className="mb-8 text-4xl font-bold text-stone-800">" The tilted cup will make your feeling better. "</h2>
        <p className="mb-4 text-sm text-stone-600">
          루오타의 시작은 <span className="font-semibold">커피트럭</span>입니다.
        </p>
        <p className="mb-4 text-sm text-stone-600">
          '<span className="font-semibold">굴러가는 바퀴</span>'는 언제 어디서든 맛있는 커피를 마실 수 있도록 찾아가는
          것,
          <br />'<span className="font-semibold">기울어진 잔</span>'은 커피잔을 기울여 커피를 마시는 그 순간을
          의미합니다.
        </p>
        <p className="mb-4 text-sm text-stone-600">
          우리의 커피는 <span className="font-semibold">따뜻한 첫인상</span>과 자극없이도
          <br />
          <span className="font-semibold">오래 기억되는 커피</span>를 지향하고 있습니다.
        </p>
        <p className="mb-4 text-sm text-stone-600">
          갓 볶은 신선한 <span className="font-semibold">블렌딩 원두</span>와{" "}
          <span className="font-semibold">나폴리식 에스프레소</span>,
          <br />
          다양한 베리에이션 메뉴들과 <span className="font-semibold">시그니처 크림커피</span> 등
        </p>
        <p className="mb-4 text-sm text-stone-600">
          항상 달라지는 서포트 현장은 변수가 많습니다.
          <br />
          언제 어디서든 우리의 커피맛을 그대로 낼 수 있도록
          <br />
          많은 <span className="font-semibold">연구</span>를하고 <span className="font-semibold">준비</span>했습니다.
        </p>
        <p className="mb-8 text-sm text-stone-600">
          일상 속 커피 한 잔으로
          <br />
          오늘 하루의 기분이 조금 더 나아질 수 있도록!
        </p>
      </div>
    </section>
  )
}
