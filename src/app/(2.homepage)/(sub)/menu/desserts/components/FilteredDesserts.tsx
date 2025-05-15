"use client"

import { useState } from "react"
import { Category, CategoryFilter } from "./CategoryFilter"
import { type Dessert, DessertCard } from "./DessertCard"

interface FilteredDessertsProps {
  desserts: Dessert[]
}

export function FilteredDesserts({ desserts }: FilteredDessertsProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("전체")

  const filteredDesserts =
    selectedCategory === "전체" ? desserts : desserts.filter((dessert) => dessert.category === selectedCategory)

  return (
    <div className="space-y-8">
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {filteredDesserts.map((dessert) => (
          <DessertCard key={dessert.id} dessert={dessert} priority={dessert.id <= 4} />
        ))}
      </div>

      {filteredDesserts.length === 0 && (
        <div className="text-muted-foreground my-12 text-center">해당 카테고리의 디저트가 없습니다.</div>
      )}
    </div>
  )
}
