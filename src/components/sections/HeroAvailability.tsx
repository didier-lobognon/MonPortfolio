import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'
import { useTheme } from '@/i18n/ThemeProvider'

const ROTATE_MS = 2800

/** Statut hero animé — remplace le badge « Disponible » statique */
export function HeroAvailability({ className, center }: { className?: string; center?: boolean }) {
  const { t } = useLanguage()
  const { isDark } = useTheme()
  const reduceMotion = useReducedMotion()
  const lines = t.hero.statusLines
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion || lines.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % lines.length)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [lines.length, reduceMotion])

  const current = lines[index] ?? t.hero.availability

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ delay: 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(center && 'flex justify-center', className)}
      role="status"
      aria-live="polite"
    >
      <div
        className={cn(
          'group relative inline-flex max-w-full items-center gap-2.5 overflow-hidden rounded-full border px-3.5 py-2 sm:gap-3 sm:px-4 sm:py-2.5',
          isDark
            ? 'border-emerald-400/35 bg-emerald-400/[0.08] shadow-[0_0_32px_rgba(52,211,153,0.18)]'
            : 'border-text/10 bg-elevated shadow-[0_8px_24px_rgba(15,23,42,0.06)]',
        )}
      >
        {/* Shine sweep */}
        {!reduceMotion && (
          <motion.span
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12',
              isDark ? 'bg-gradient-to-r from-transparent via-white/15 to-transparent' : 'bg-gradient-to-r from-transparent via-white/70 to-transparent',
            )}
            animate={{ left: ['-40%', '120%'] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.6, ease: 'easeInOut' }}
          />
        )}

        {/* Live pulse + orbit */}
        <span className="relative flex h-7 w-7 shrink-0 items-center justify-center" aria-hidden>
          {!reduceMotion && (
            <>
              <motion.span
                className={cn(
                  'absolute inset-0 rounded-full border',
                  isDark ? 'border-emerald-400/50' : 'border-emerald-600/40',
                )}
                animate={{ scale: [1, 1.45], opacity: [0.55, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.span
                className={cn(
                  'absolute inset-[3px] rounded-full border border-dashed',
                  isDark ? 'border-emerald-300/40' : 'border-emerald-700/30',
                )}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
            </>
          )}
          <span
            className={cn(
              'relative flex h-2.5 w-2.5 rounded-full',
              isDark
                ? 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.95)]'
                : 'bg-emerald-600 shadow-[0_0_10px_rgba(5,150,105,0.55)]',
            )}
          >
            {!reduceMotion && (
              <span
                className={cn(
                  'absolute inset-0 animate-ping rounded-full opacity-60',
                  isDark ? 'bg-emerald-400' : 'bg-emerald-600',
                )}
              />
            )}
          </span>
        </span>

        <div className="relative min-h-[1.25rem] min-w-0 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current}
              initial={{ y: 14, opacity: 0, filter: 'blur(4px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -12, opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                'flex items-center gap-1.5 text-xs font-medium tracking-wide sm:text-sm',
                isDark ? 'text-emerald-200' : 'text-text',
              )}
            >
              <Sparkles
                size={13}
                className={cn('shrink-0', isDark ? 'text-emerald-300/90' : 'text-emerald-700')}
                strokeWidth={2}
                aria-hidden
              />
              <span className="truncate">{current}</span>
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Progress ticks */}
        {lines.length > 1 && (
          <span className="relative ml-0.5 hidden items-center gap-1 sm:flex" aria-hidden>
            {lines.map((_, i) => (
              <motion.span
                key={i}
                className={cn(
                  'h-1 rounded-full',
                  i === index
                    ? isDark
                      ? 'w-3 bg-emerald-400'
                      : 'w-3 bg-text'
                    : isDark
                      ? 'w-1 bg-emerald-400/30'
                      : 'w-1 bg-text/20',
                )}
                layout
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              />
            ))}
          </span>
        )}
      </div>
    </motion.div>
  )
}
