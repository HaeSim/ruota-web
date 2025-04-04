"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const categories = ["전체", "구움과자", "케이크", "쿠키"] as const
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
