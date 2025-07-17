"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Ensure we only render once hydrated to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Apply a class to prevent flash during theme change
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.add("theme-ready")
    }
  }, [mounted])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
