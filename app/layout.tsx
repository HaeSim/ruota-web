import "styles/tailwind.css"
import { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { env } from "@/env.mjs"
import Footer from "./_components/common/Footer"
import Header from "./_components/common/Header"
import { Toaster } from "./_components/common/toaster"

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export const metadata: Metadata = {
  metadataBase: new URL(env.NODE_ENV === "development" ? "http://localhost:3000" : "http://ruota.coffee"),
  title: "ruota",
  description: "루오타 커피차 커피바 케이터링 서비스",
  applicationName: "ruota",
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
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
