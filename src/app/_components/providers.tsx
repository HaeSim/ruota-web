"use client"
import React from "react"
import { ActiveThemeProvider } from "@/app/_components/active-theme"
import ThemeProvider from "./ThemeToggle/theme-provider"

export default function Providers({
  activeThemeValue,
  children,
}: {
  activeThemeValue: string
  children: React.ReactNode
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange enableColorScheme>
        <ActiveThemeProvider initialTheme={activeThemeValue}>{children}</ActiveThemeProvider>
      </ThemeProvider>
    </>
  )
}
