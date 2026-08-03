import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useMagnetic } from '@/hooks/useMagnetic'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

/**
 * Wrapper magnétique (div) — desktop only.
 * Sur tactile, rendu neutre pour éviter les transforms parasites.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const isFine = useMediaQuery('(pointer: fine)')
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(isFine ? strength : 0)

  if (!isFine) {
    return <div className={cn('inline-flex w-full sm:w-auto', className)}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        'inline-flex transition-transform duration-200 ease-out will-change-transform',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
