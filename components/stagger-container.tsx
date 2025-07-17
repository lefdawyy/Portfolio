"use client"

import React from "react"

import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className, staggerDelay = 100 }: StaggerContainerProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-30px",
  })

  return (
    <div ref={ref} className={cn("space-y-4", className)}>
      {React.Children.map(children, (child, index) => (
        <div
          className={cn(
            "transition-all duration-600 ease-out",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          )}
          style={{
            transitionDelay: isIntersecting ? `${index * staggerDelay}ms` : "0ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
