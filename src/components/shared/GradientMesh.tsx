import { motion } from 'framer-motion'
import { useTheme } from '@/i18n/ThemeProvider'

/** Mesh / blobs animés — dark uniquement (light = fond blanc net) */
export function GradientMesh() {
  const { isDark } = useTheme()
  if (!isDark) return null

  return (
    <div className="theme-ambient pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-accent/25 blur-[100px] animate-pulse-glow"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 h-[380px] w-[380px] rounded-full bg-accent-violet/20 blur-[110px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-accent-cyan/15 blur-[90px]"
        animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
