import { useRef, type MouseEvent, type ReactNode } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useTheme } from '@/i18n/ThemeProvider'

interface GlowCardProps {
  children: ReactNode
  className?: string
}

/** Carte glass avec glow souris (dark) — light = carte plate nette */
export function GlowCard({ children, className }: GlowCardProps) {
  const { isDark } = useTheme()
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!isDark) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)

    const px = (x / rect.width - 0.5) * 8
    const py = (y / rect.height - 0.5) * -8
    rotateX.set(py)
    rotateY.set(px)
  }

  function handleMouseLeave() {
    rotateX.set(0)
    rotateY.set(0)
  }

  const background = useMotionTemplate`
    radial-gradient(
      420px circle at ${mouseX}px ${mouseY}px,
      rgba(59, 130, 246, 0.15),
      transparent 40%
    )
  `

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isDark ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300',
        isDark
          ? 'bg-card/80 backdrop-blur-md hover:shadow-glow'
          : 'light-card hover:border-text',
        className,
      )}
    >
      {isDark && (
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}
      <div className="relative z-10" style={isDark ? { transform: 'translateZ(20px)' } : undefined}>
        {children}
      </div>
    </motion.div>
  )
}
