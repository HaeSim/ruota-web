import "@/styles/tailwind.css"
import { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { cookies } from "next/headers"
import NextTopLoader from "nextjs-toploader"
import { NuqsAdapter } from "nuqs/adapters/next/app"
import Providers from "@/components/layout/providers"
import { Toaster } from "@/components/ui/sonner"
import { env } from "@/env.mjs"
import { auth } from "@/lib/auth"
import { fontVariables } from "@/lib/font"
import { cn } from "@/lib/utils"

const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
}

export const metadata: Metadata = {
  metadataBase: new URL(env.NODE_ENV === "development" ? "http://localhost:3000" : env.NEXT_PUBLIC_URL),
  title: "ruota",
  description: "루오타 커피차 커피바 케이터링 서비스",
  applicationName: "ruota",
  openGraph: {
    title: "ruota",
    description: "루오타 커피차 커피바 케이터링 서비스",
    url: env.NEXT_PUBLIC_URL,
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  const cookieStore = await cookies()
  const activeThemeValue = cookieStore.get("active_theme")?.value
  const isScaled = activeThemeValue?.endsWith("-scaled")
  return (
    <html lang="ko" className={`${pretendard.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
              }
            } catch (_) {}
          `,
          }}
        />
      </head>
      <body
        className={cn(
          "bg-background font-sans antialiased",
          activeThemeValue ? `theme-${activeThemeValue}` : "",
          isScaled ? "theme-scaled" : "",
          fontVariables,
          pretendard.className
        )}
      >
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>
          <Providers session={session} activeThemeValue={activeThemeValue as string}>
            <Toaster />
            {children}
          </Providers>
        </NuqsAdapter>
      </body>
    </html>
  )
}
