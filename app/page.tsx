import HeroCarousel from "./_components/common/HeroCarousel"
import EspressoCalibrationSection from "./_components/home/EspressoCalibrationSection"
import PreFooter from "./_components/home/PreFooter"
import QuoteSection from "./_components/home/QuoteSection"
import ThreeColumnFeature from "./_components/home/ThreeColumnFeature"

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100">
      <HeroCarousel />
      <QuoteSection />
      <EspressoCalibrationSection />
      <ThreeColumnFeature />
      <PreFooter />
    </div>
  )
}
