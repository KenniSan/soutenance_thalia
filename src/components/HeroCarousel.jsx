import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sites } from '../data/sites'

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const slideCount = sites.length

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % slideCount)
  }, [slideCount])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const currentSite = sites[currentIndex]

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={currentIndex}
          src={currentSite.image}
          alt={currentSite.name}
          custom={direction}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {Array.from({ length: Math.min(7, slideCount) }).map((_, i) => {
          const actualIndex = currentIndex < 4 ? i : currentIndex - 3 + i
          if (actualIndex >= slideCount) return null
          return (
            <button
              key={actualIndex}
              onClick={() => { setDirection(actualIndex > currentIndex ? 1 : -1); setCurrentIndex(actualIndex) }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                actualIndex === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          )
        })}
      </div>

      <div className="absolute bottom-16 left-6 right-6 z-10">
        <motion.p
          key={`label-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-white/60 text-sm font-medium tracking-wide"
        >
          {currentSite.name}
        </motion.p>
      </div>
    </div>
  )
}
