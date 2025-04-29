import { useEffect, useState } from "react"

export function useMediaQuery() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    setIsDesktop(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches)
    }

    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return { isOpen: isDesktop }
}
