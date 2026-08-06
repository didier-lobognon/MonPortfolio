import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import logo from '@/assets/brand/logo-ld-didier.png'

interface LoadingScreenProps {
  onComplete: () => void
}

/**
 * Chargement fluide — logo central + anneau circulaire.
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [done, setDone] = useState(false)

  const size = 148
  const stroke = 2.5
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - progress / 100)

  useEffect(() => {
    const start = performance.now()
    const duration = reduceMotion ? 400 : 1800
    let raf = 0

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setProgress(Math.round(eased * 100))

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setDone(true)
        onComplete()
        window.setTimeout(() => setVisible(false), 480)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onComplete, reduceMotion])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#03050f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          aria-live="polite"
          aria-label="Chargement du portfolio"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 50% 40% at 50% 48%, rgba(59,130,246,0.18), transparent 65%)',
            }}
            aria-hidden
          />

          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{
              opacity: done ? 0 : 1,
              scale: done ? 1.06 : 1,
            }}
            transition={{ duration: done ? 0.4 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative" style={{ width: size, height: size }}>
              {/* Soft glow behind logo */}
              <div
                className="absolute inset-[18%] rounded-full bg-accent/25 blur-2xl"
                aria-hidden
              />

              <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="absolute inset-0 -rotate-90"
                aria-hidden
              >
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth={stroke}
                />
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="url(#loader-ring)"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.55))',
                    transition: 'stroke-dashoffset 80ms linear',
                  }}
                />
                <defs>
                  <linearGradient id="loader-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Accent spinner tip */}
              {!reduceMotion && (
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.35, repeat: Infinity, ease: 'linear' }}
                  aria-hidden
                >
                  <span
                    className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                    style={{ marginTop: stroke / 2 }}
                  />
                </motion.div>
              )}

              <div className="absolute inset-0 flex items-center justify-center p-7">
                <img
                  src={logo}
                  alt="LD Didier"
                  className="h-auto w-full object-contain drop-shadow-[0_0_28px_rgba(59,130,246,0.35)]"
                  width={120}
                  height={60}
                  decoding="async"
                />
              </div>
            </div>

            <p className="mt-6 font-mono text-[11px] tabular-nums tracking-[0.28em] text-slate-400">
              {progress}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
