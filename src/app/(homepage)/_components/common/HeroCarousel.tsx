"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import { CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function HeroCarousel() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  const banners: { id: number; imageUrl?: string; imageUrlMobile: string; title: string }[] = [
    {
      id: 1,
      imageUrl: "/images/index/banner/banner_1.png",
      imageUrlMobile: "/images/index/banner/banner_mobile_1.png",
      title: "배너 1",
    },
    {
      id: 2,
      imageUrl: undefined,
      imageUrlMobile: "/images/index/banner/banner_mobile_2.png",
      title: "배너 2",
    },
    {
      id: 3,
      imageUrl: undefined,
      imageUrlMobile: "/images/index/banner/banner_mobile_3.png",
      title: "배너 3",
    },
  ]

  const filteredBanners = banners.filter((banner) => {
    if (isMobile) {
      return banner.imageUrlMobile !== undefined
    }
    return banner.imageUrl !== undefined
  })

  if (filteredBanners.length === 0) {
    return null
  }

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
          {filteredBanners.map((banner, index) => (
            <CarouselItem key={banner.id}>
              <>
                <CardContent className="flex items-center justify-center overflow-hidden p-0">
                  <div className="relative h-dvh w-full">
                    <Image
                      src={isMobile ? banner.imageUrlMobile ?? "" : banner.imageUrl ?? ""}
                      alt={banner.title}
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
