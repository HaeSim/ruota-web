import { Metadata } from "next"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
  Credenza,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza"
import { drinkSets } from "./data"

export const metadata: Metadata = {
  title: "음료 메뉴 | ruota",
  description: "루오타의 시그니처 커피와 다양한 음료를 소개합니다",
}

/**
 * 음료 메뉴 페이지
 * @description 루오타의 음료 메뉴를 소개하는 페이지
 */
export default function DrinksPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="mb-2 text-center text-2xl font-bold sm:text-4xl">음료 메뉴</h1>
      <p className="mb-6 text-center text-base text-gray-600 sm:mb-8 sm:text-lg">
        루오타의 시그니처 커피와 다양한 음료를 소개합니다
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {drinkSets.map((set) => (
          <Credenza key={set.id}>
            <CredenzaTrigger asChild>
              <div className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg">
                <Image
                  src={set.image}
                  alt={set.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-xl font-bold text-white">{set.title}</h3>
                  <p className="mt-1 text-sm text-white/90">{set.subtitle}</p>
                </div>
              </div>
            </CredenzaTrigger>
            <CredenzaContent>
              <CredenzaHeader>
                <CredenzaTitle className="text-2xl font-bold">{set.title}</CredenzaTitle>
                <CredenzaDescription className="text-lg text-gray-600">{set.subtitle}</CredenzaDescription>
              </CredenzaHeader>

              <div className="mt-6 space-y-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image src={set.image} alt={set.title} fill className="object-cover" />
                </div>

                <div className="space-y-4 px-4 md:px-0">
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">주요 특징</h4>
                    <div className="flex flex-wrap gap-2">
                      {set.features.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-lg font-semibold">상세 설명</h4>
                    <p className="whitespace-pre-line text-gray-600">{set.description}</p>
                  </div>
                </div>
              </div>
            </CredenzaContent>
          </Credenza>
        ))}
      </div>
    </div>
  )
}
