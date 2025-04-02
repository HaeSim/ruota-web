import Footer from "@/app/(homepage)/_components/common/Footer"
import Header from "@/app/(homepage)/_components/common/Header"

export default function HomepageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
