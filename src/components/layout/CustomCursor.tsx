import { motion, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useMediaQuery } from '@/hooks/useMediaQuery'

/** Curseur personnalisé (desktop uniquement) */
export function CustomCursor() {
  const { x, y } = useMousePosition()
  const isFine = useMediaQuery('(pointer: fine)')
  const springX = useSpring(0, { stiffness: 400, damping: 35, mass: 0.4 })
  const springY = useSpring(0, { stiffness: 400, damping: 35, mass: 0.4 })
  const ringX = useSpring(0, { stiffness: 180, damping: 28, mass: 0.5 })
  const ringY = useSpring(0, { stiffness: 180, damping: 28, mass: 0.5 })

  useEffect(() => {
    if (!isFine) return
    document.body.classList.add('has-custom-cursor')
    return () => document.body.classList.remove('has-custom-cursor')
  }, [isFine])

  useEffect(() => {
    springX.set(x)
    springY.set(y)
    ringX.set(x)
    ringY.set(y)
  }, [x, y, springX, springY, ringX, ringY])

  if (!isFine) return null

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[90] h-2 w-2 -ml-1 -mt-1 rounded-full bg-accent mix-blend-difference"
        style={{ x: springX, y: springY }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[89] h-8 w-8 -ml-4 -mt-4 rounded-full border border-accent/50"
        style={{ x: ringX, y: ringY }}
        aria-hidden
      />
    </>
  )
}
