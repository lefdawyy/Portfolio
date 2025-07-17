"use client"

import type React from "react"
import { useEffect, useCallback } from "react"

interface SmoothScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function SmoothScrollLink({ href, children, className }: SmoothScrollLinkProps) {
  // Function to handle smooth scrolling
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 70 // Height of the sticky header with some padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  // Handle click event
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    scrollToSection(targetId)
  }

  // Add smooth scrolling behavior to the document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    // Handle hash changes for direct links
    const handleHashChange = () => {
      if (window.location.hash) {
        const targetId = window.location.hash.replace("#", "")
        setTimeout(() => {
          scrollToSection(targetId)
        }, 100)
      }
    }

    // Check for hash on initial load
    if (window.location.hash) {
      handleHashChange()
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [scrollToSection])

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
