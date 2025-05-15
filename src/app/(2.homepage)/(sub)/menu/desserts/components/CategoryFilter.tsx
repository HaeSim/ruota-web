"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const categories = ["전체", "구운과자", "브런치", "과일"] as const
export type Category = (typeof categories)[number]

interface CategoryFilterProps {
  selectedCategory: Category
  onCategoryChange: (category: Category) => void
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex justify-center">
      <Tabs
        value={selectedCategory}
        onValueChange={(value) => onCategoryChange(value as Category)}
        className="w-full max-w-[600px]"
      >
        <TabsList className="grid w-full grid-cols-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="text-sm md:text-base">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}
