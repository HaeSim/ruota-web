import HeroCarousel from "./_components/common/HeroCarousel"
import EspressoCalibrationSection from "./_components/main/EspressoCalibrationSection"
import PreFooter from "./_components/main/PreFooter"
import QuoteSection from "./_components/main/QuoteSection"
import ThreeColumnFeature from "./_components/main/ThreeColumnFeature"

/**
 * 랜딩 페이지(홈페이지)
 */
export default function LandingPage() {
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
