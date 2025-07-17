"use client"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"
import type React from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  index?: number
}

export function AnimatedCard({ children, className, delay = 0, index = 0 }: AnimatedCardProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-20px",
  })

  const calculatedDelay = delay + index * 150

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isIntersecting ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95",
        className,
      )}
      style={{
        transitionDelay: isIntersecting ? `${calculatedDelay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  )
}
