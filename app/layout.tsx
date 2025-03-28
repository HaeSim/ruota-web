import "styles/tailwind.css"
import { Metadata } from "next"
import Footer from "./_components/Footer"
import Header from "./_components/Header"
import { Toaster } from "./_components/toaster"

export const metadata: Metadata = {
  title: "ruota",
  description: "루오타 커피차 커피바 케이터링 서비스",
  applicationName: "ruota",
  themeColor: "#ada59b",
  openGraph: {
    title: "ruota",
    description: "루오타 커피차 커피바 케이터링 서비스",
    url: "http://ruota.coffee",
    type: "website",
    images: [
      {
        url: "/images/_common/og_image.webp",
        width: 1200,
        height: 627,
      },
    ],
  },
  icons: {
    icon: [{ url: "/images/_common/icon.png", sizes: "196x196", type: "image/png" }],
    apple: [{ url: "/images/_common/icon_apple.png", sizes: "152x152" }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
