import HeroCarousel from "./_components/common/HeroCarousel"
import EspressoCalibrationSection from "./_components/main/EspressoCalibrationSection"
import PreFooter from "./_components/main/PreFooter"
import QuoteSection from "./_components/main/QuoteSection"
import ThreeColumnFeature from "./_components/main/ThreeColumnFeature"

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
