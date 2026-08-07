import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/i18n/ThemeProvider'
import { useLanguage } from '@/i18n/LanguageProvider'
import { cn } from '@/lib/utils'

/** Bascule dark/light — animation circulaire type Hostinger (View Transitions) */
export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, toggleTheme } = useTheme()
  const { locale } = useLanguage()
  const btnRef = useRef<HTMLButtonElement>(null)

  const label = isDark
    ? locale === 'fr'
      ? 'Passer en mode clair'
      : 'Switch to light mode'
    : locale === 'fr'
      ? 'Passer en mode sombre'
      : 'Switch to dark mode'

  const onToggle = () => {
    const el = btnRef.current
    if (!el) {
      toggleTheme()
      return
    }
    const rect = el.getBoundingClientRect()
    toggleTheme({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
  }

  return (
    <motion.button
      ref={btnRef}
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      data-cursor={isDark ? 'Light' : 'Dark'}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      className={cn(
        'relative inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-surface/70 text-text transition-colors hover:border-accent/40 hover:bg-accent/10',
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -40, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 40, scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="flex items-center justify-center"
          >
            <Sun size={15} strokeWidth={2.25} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 40, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -40, scale: 0.5, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="flex items-center justify-center"
          >
            <Moon size={15} strokeWidth={2.25} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
