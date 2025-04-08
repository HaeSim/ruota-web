"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { DrinkSetCard } from "./DrinkSetCard"
import type { DrinkSet } from "../data"
import { icons } from "../icons"

interface DrinkSetSelectorProps {
  drinkSets: DrinkSet[]
}

export function DrinkSetSelector({ drinkSets }: DrinkSetSelectorProps) {
  const [selectedSet, setSelectedSet] = useState("basic")

  return (
    <>
      {/* 모바일 드롭다운 */}
      <div className="mb-4 block sm:hidden">
        <Select value={selectedSet} onValueChange={setSelectedSet}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {drinkSets.map((set) => (
              <SelectItem key={set.id} value={set.id} className="flex items-center gap-2 py-3">
                <div className="flex items-center gap-2">
                  {icons[set.id as keyof typeof icons]}
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{set.name}</span>
                    <span className="text-xs text-stone-500">{set.nameEn}</span>
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {drinkSets.map((set) => selectedSet === set.id && <DrinkSetCard key={set.id} set={set} />)}
      </div>

      {/* 데스크톱 탭 */}
      <div className="hidden sm:block">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-4 gap-4">
            {drinkSets.map((set) => (
              <TabsTrigger
                key={set.id}
                value={set.id}
                className="flex items-center justify-center gap-2 px-4 py-3 text-base transition-all hover:bg-stone-100 data-[state=active]:bg-stone-200 data-[state=active]:shadow-sm"
              >
                {icons[set.id as keyof typeof icons]}
                <div className="flex flex-col items-start">
                  <span className="font-medium">{set.name}</span>
                  <span className="text-xs text-stone-500">{set.nameEn}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {drinkSets.map((set) => (
            <TabsContent key={set.id} value={set.id}>
              <DrinkSetCard set={set} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  )
}
