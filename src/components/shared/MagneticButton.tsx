import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useMagnetic } from '@/hooks/useMagnetic'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

/**
 * Wrapper magnétique (div) — enveloppe un vrai bouton / lien enfant
 * pour éviter le nesting HTML invalide.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(strength)

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn('inline-flex transition-transform duration-200 ease-out will-change-transform', className)}
    >
      {children}
    </motion.div>
  )
}
