import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'
import { setLenisInstance } from '@/lib/lenis'

interface SmoothScrollProps {
  children: ReactNode
}

/** Smooth scroll Lenis branché sur le raf */
export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    setLenisInstance(lenis)

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      setLenisInstance(null)
    }
  }, [])

  return <>{children}</>
}
