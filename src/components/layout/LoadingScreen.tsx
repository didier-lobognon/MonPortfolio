import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import logo from '@/assets/brand/logo-ld-didier.png'

interface LoadingScreenProps {
  onComplete: () => void
}

const BOOT_LINES = [
  'Boot sequence · LD',
  'Loading craft & stack',
  'Hydrating experience',
  'Ready to ship',
] as const

/**
 * Splash premium — grandeur, précision, identité pro.
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'boot' | 'load' | 'burst' | 'exit'>('boot')
  const [visible, setVisible] = useState(true)
  const [lineIdx, setLineIdx] = useState(0)

  const progressMv = useMotionValue(0)
  const progressSpring = useSpring(progressMv, {
    stiffness: 70,
    damping: 24,
    mass: 0.45,
  })
  const barWidth = useTransform(progressSpring, (v) => `${v}%`)
  const glowOpacity = useTransform(progressSpring, [0, 35, 100], [0.12, 0.4, 0.7])

  useEffect(() => {
    const boot = window.setTimeout(() => setPhase('load'), 500)
    return () => window.clearTimeout(boot)
  }, [])

  useEffect(() => {
    if (phase !== 'load') return
    const id = window.setInterval(() => {
      setLineIdx((i) => Math.min(i + 1, BOOT_LINES.length - 1))
    }, 520)
    return () => window.clearInterval(id)
  }, [phase])

  useEffect(() => {
    if (phase !== 'load') return

    const start = performance.now()
    const duration = 2800
    let raf = 0

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      const value = Math.round(eased * 100)
      setProgress(value)
      progressMv.set(value)

      if (t < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setPhase('burst')
        window.setTimeout(() => {
          setPhase('exit')
          onComplete()
          window.setTimeout(() => setVisible(false), 820)
        }, 560)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [phase, onComplete, progressMv])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#03050f]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          role="status"
          aria-live="polite"
          aria-label="Chargement du portfolio"
        >
          {/* Atmosphère */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 45% at 50% 42%, rgba(59,130,246,0.28), transparent 62%), radial-gradient(ellipse 40% 35% at 72% 58%, rgba(167,139,250,0.2), transparent 55%), radial-gradient(ellipse 35% 30% at 28% 65%, rgba(34,211,238,0.12), transparent 50%)',
              opacity: glowOpacity,
            }}
            aria-hidden
          />

          {/* Grille perspective */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(148,163,184,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.55) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
              maskImage:
                'radial-gradient(ellipse at center, black 15%, transparent 72%)',
              transform: 'perspective(600px) rotateX(58deg) translateY(18%)',
              transformOrigin: 'center top',
            }}
            aria-hidden
          />

          {/* Vignette */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#03050f_85%)]"
            aria-hidden
          />

          {/* Anneaux */}
          <motion.div
            className="pointer-events-none absolute top-[44%] left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20 sm:h-[380px] sm:w-[380px]"
            animate={
              phase === 'exit'
                ? { scale: 2.6, opacity: 0 }
                : { rotate: 360 }
            }
            transition={
              phase === 'exit'
                ? { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
                : { duration: 18, repeat: Infinity, ease: 'linear' }
            }
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute top-[44%] left-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent-violet/25 sm:h-[280px] sm:w-[280px]"
            animate={
              phase === 'exit'
                ? { scale: 3, opacity: 0 }
                : { rotate: -360 }
            }
            transition={
              phase === 'exit'
                ? { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
                : { duration: 12, repeat: Infinity, ease: 'linear' }
            }
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute top-[44%] left-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/15 sm:h-[190px] sm:w-[190px]"
            animate={
              phase === 'exit' ? { scale: 3.4, opacity: 0 } : { rotate: 360 }
            }
            transition={
              phase === 'exit'
                ? { duration: 0.75 }
                : { duration: 8, repeat: Infinity, ease: 'linear' }
            }
            aria-hidden
          />

          {/* Points orbitaux */}
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute top-[44%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2"
              animate={{
                rotate: 360,
                opacity: phase === 'exit' ? 0 : [0.25, 1, 0.25],
              }}
              transition={{
                rotate: {
                  duration: 6 + i * 1.8,
                  repeat: Infinity,
                  ease: 'linear',
                },
                opacity: { duration: 2.2, repeat: Infinity, delay: i * 0.3 },
              }}
              aria-hidden
            >
              <span
                className="absolute block h-1.5 w-1.5 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.95)]"
                style={{
                  background: i % 2 === 0 ? '#22D3EE' : '#A78BFA',
                  transform: `translate(${100 + i * 26}px, 0)`,
                }}
              />
            </motion.span>
          ))}

          {/* Marque */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.7, filter: 'blur(18px)' }}
            animate={
              phase === 'boot'
                ? { opacity: 0, scale: 0.7, filter: 'blur(18px)' }
                : phase === 'burst'
                  ? {
                      opacity: 1,
                      scale: [1, 1.1, 1.03],
                      filter: 'blur(0px)',
                    }
                  : phase === 'exit'
                    ? {
                        opacity: [1, 1, 0],
                        scale: [1.03, 1.6, 3.1],
                        filter: ['blur(0px)', 'blur(0px)', 'blur(14px)'],
                      }
                    : { opacity: 1, scale: 1, filter: 'blur(0px)' }
            }
            transition={
              phase === 'burst'
                ? { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                : phase === 'exit'
                  ? { duration: 0.78, ease: [0.65, 0, 0.35, 1] }
                  : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
            }
          >
            <motion.div
              className="absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/35 blur-3xl sm:h-56 sm:w-56"
              animate={
                phase === 'burst' || phase === 'exit'
                  ? { scale: [1, 2, 2.6], opacity: [0.45, 0.85, 0] }
                  : { scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }
              }
              transition={
                phase === 'burst' || phase === 'exit'
                  ? { duration: 0.75 }
                  : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }
              aria-hidden
            />

            <img
              src={logo}
              alt="LD Didier"
              className="relative h-28 w-auto drop-shadow-[0_0_48px_rgba(59,130,246,0.55)] sm:h-36 md:h-44"
              width={360}
              height={180}
              decoding="async"
            />

            <motion.div
              className="relative mt-5 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={
                phase === 'exit'
                  ? { opacity: 0, y: 16 }
                  : { opacity: 1, y: 0 }
              }
              transition={{ delay: 0.35, duration: 0.55 }}
            >
              <p className="font-display text-lg font-semibold tracking-tight text-text sm:text-xl">
                Didier Lobognon
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.32em] text-accent-cyan uppercase sm:text-[11px]">
                Full Stack Developer
              </p>
            </motion.div>
          </motion.div>

          {/* Flash */}
          <AnimatePresence>
            {phase === 'burst' && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-20 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.28, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                aria-hidden
              />
            )}
          </AnimatePresence>

          {/* Progress + boot lines */}
          <motion.div
            className="relative z-10 mt-10 flex w-[min(320px,78vw)] flex-col items-center gap-5 sm:mt-12"
            initial={{ opacity: 0, y: 18 }}
            animate={
              phase === 'exit'
                ? { opacity: 0, y: 28, filter: 'blur(8px)' }
                : { opacity: 1, y: 0, filter: 'blur(0px)' }
            }
            transition={{ delay: phase === 'load' ? 0.3 : 0, duration: 0.5 }}
          >
            <div className="flex min-h-[1.25rem] w-full items-center justify-between gap-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={BOOT_LINES[lineIdx]}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="font-mono text-[10px] tracking-[0.18em] text-slate-400 uppercase sm:text-[11px]"
                >
                  {phase === 'burst' || phase === 'exit'
                    ? 'Portfolio ready'
                    : BOOT_LINES[lineIdx]}
                </motion.span>
              </AnimatePresence>
              <span className="font-mono text-[11px] tabular-nums tracking-[0.16em] text-accent-cyan sm:text-xs">
                {progress}%
              </span>
            </div>

            <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent via-accent-violet to-accent-cyan"
                style={{
                  width: barWidth,
                  boxShadow: '0 0 18px rgba(34,211,238,0.45)',
                }}
              />
              <motion.div
                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/55 to-transparent"
                animate={{ left: ['-25%', '125%'] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                aria-hidden
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {['React', 'NestJS', 'TypeScript', 'Prod'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: phase === 'exit' ? 0 : 1, y: 0 }}
                  transition={{ delay: 0.55 + i * 0.12, duration: 0.4 }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[9px] tracking-[0.14em] text-slate-500 uppercase"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
