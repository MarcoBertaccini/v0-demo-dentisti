'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  alt: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Prima',
  afterLabel = 'Dopo',
  alt,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100

      if (newPosition >= 0 && newPosition <= 100) {
        setSliderPosition(newPosition)
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100

      if (newPosition >= 0 && newPosition <= 100) {
        setSliderPosition(newPosition)
      }
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      ref={containerRef}
      className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden glass cursor-col-resize group"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={beforeImage}
          alt={`${alt} - ${beforeLabel}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
          <span className="text-sm font-semibold text-white">{beforeLabel}</span>
        </div>
      </div>

      {/* After Image (Overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={afterImage}
          alt={`${alt} - ${afterLabel}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-lg">
          <span className="text-sm font-semibold text-accent-foreground">{afterLabel}</span>
        </div>
      </div>

      {/* Slider Handle */}
      <motion.div
        className="absolute top-0 bottom-0 w-1 bg-accent shadow-lg cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
        animate={{ x: 0 }}
      >
        {/* Handle Icon */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform">
          <div className="flex gap-1">
            <svg
              className="w-4 h-4 text-accent-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Mobile Hint */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/60 md:hidden bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
        Trascina per confrontare
      </div>
    </motion.div>
  )
}
