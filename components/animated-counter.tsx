'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedCounterProps {
  value: number
  label: string
  suffix?: string
}

export default function AnimatedCounter({ value, label, suffix = '' }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const { ref, isVisible } = useScrollAnimation()

  useEffect(() => {
    if (!isVisible) return

    let currentValue = 0
    const increment = Math.ceil(value / 40)
    const interval = setInterval(() => {
      currentValue += increment
      if (currentValue >= value) {
        setDisplayValue(value)
        clearInterval(interval)
      } else {
        setDisplayValue(currentValue)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isVisible, value])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="text-3xl md:text-4xl font-bold text-accent">
        {displayValue}
        {suffix}
      </div>
      <p className="text-sm text-muted-foreground text-center">{label}</p>
    </div>
  )
}
