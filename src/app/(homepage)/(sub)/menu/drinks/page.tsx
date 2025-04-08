import { Metadata } from "next"
import { DrinkSetSelector } from "./components/DrinkSetSelector"
import { drinkSets as drinkSetsData } from "./data"

export const metadata: Metadata = {
  title: "음료 메뉴 | ruota",
  description: "루오타의 시그니처 커피와 다양한 음료를 소개합니다",
}

export default function DrinksPage() {
  const drinkSets = drinkSetsData

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="mb-2 text-center text-2xl font-bold sm:text-4xl">음료 메뉴</h1>
      <p className="mb-6 text-center text-base text-gray-600 sm:mb-8 sm:text-lg">
        루오타의 시그니처 커피와 다양한 음료를 소개합니다
      </p>

      <DrinkSetSelector drinkSets={drinkSets} />
    </div>
  )
}
