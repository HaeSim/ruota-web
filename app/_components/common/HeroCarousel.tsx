"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function HeroCarousel() {
  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {[1, 2, 3].map((index) => (
            <CarouselItem key={index}>
              <>
                <CardContent className="flex items-center justify-center overflow-hidden p-0">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={`/images/index/banner/banner_${index}.png`}
                      alt={`배너 ${index}`}
                      fill
                      className="object-cover"
                      priority={index === 1}
                    />
                  </div>
                </CardContent>
              </>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  )
}
