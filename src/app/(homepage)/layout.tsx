import BottomNav from "@/app/(homepage)/_components/common/BottomNav"
import Footer from "@/app/(homepage)/_components/common/Footer"
import Header from "@/app/(homepage)/_components/common/Header"

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer className="hidden md:block" />
      <BottomNav />
    </div>
  )
}
