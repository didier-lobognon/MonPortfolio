import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import logo from '@/assets/brand/logo-ld-didier.png'

interface LoadingScreenProps {
  onComplete: () => void
}

/**
 * Splash premium — logo LD, progrès fluide, sortie « surprise » en zoom.
 */
export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'boot' | 'load' | 'burst' | 'exit'>('boot')
  const [visible, setVisible] = useState(true)

  const progressMv = useMotionValue(0)
  const progressSpring = useSpring(progressMv, { stiffness: 80, damping: 22, mass: 0.4 })
  const barWidth = useTransform(progressSpring, (v) => `${v}%`)
  const glowOpacity = useTransform(progressSpring, [0, 40, 100], [0.15, 0.45, 0.75])

  useEffect(() => {
    const boot = window.setTimeout(() => setPhase('load'), 420)
    return () => window.clearTimeout(boot)
  }, [])

  useEffect(() => {
    if (phase !== 'load') return

    const start = performance.now()
    const duration = 2400
    let raf = 0

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      // ease-out expo — rapide puis ralenti pour le suspense
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
          // Monte le site derrière le splash pendant le zoom
          onComplete()
          window.setTimeout(() => setVisible(false), 780)
        }, 520)
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
          transition={{ duration: 0.35 }}
          role="status"
          aria-live="polite"
          aria-label="Chargement du portfolio"
        >
          {/* Fond atmosphère */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(59,130,246,0.22), transparent 60%), radial-gradient(ellipse 40% 35% at 70% 60%, rgba(139,92,246,0.18), transparent 55%)',
              opacity: glowOpacity,
            }}
            aria-hidden
          />

          {/* Grille perspective */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            }}
            aria-hidden
          />

          {/* Anneaux orbitaux */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-[46%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/25 sm:h-[340px] sm:w-[340px]"
            animate={
              phase === 'exit'
                ? { scale: 2.4, opacity: 0 }
                : { rotate: 360, opacity: 1 }
            }
            transition={
              phase === 'exit'
                ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                : { duration: 14, repeat: Infinity, ease: 'linear' }
            }
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute left-1/2 top-[46%] h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-violet/20 sm:h-[260px] sm:w-[260px]"
            animate={
              phase === 'exit'
                ? { scale: 2.8, opacity: 0 }
                : { rotate: -360, opacity: 1 }
            }
            transition={
              phase === 'exit'
                ? { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                : { duration: 10, repeat: Infinity, ease: 'linear' }
            }
            aria-hidden
          />

          {/* Points orbitaux */}
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute left-1/2 top-[46%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan"
              style={{ originX: 0.5, originY: 0.5 }}
              animate={{
                rotate: 360,
                opacity: phase === 'exit' ? 0 : [0.3, 1, 0.3],
              }}
              transition={{
                rotate: { duration: 5 + i * 2, repeat: Infinity, ease: 'linear' },
                opacity: { duration: 2, repeat: Infinity, delay: i * 0.4 },
              }}
              aria-hidden
            >
              <span
                className="absolute block h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_12px_rgba(34,211,238,0.9)]"
                style={{
                  transform: `translate(${90 + i * 28}px, 0)`,
                }}
              />
            </motion.span>
          ))}

          {/* Logo */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.72, filter: 'blur(16px)' }}
            animate={
              phase === 'boot'
                ? { opacity: 0, scale: 0.72, filter: 'blur(16px)' }
                : phase === 'burst'
                  ? {
                      opacity: 1,
                      scale: [1, 1.12, 1.04],
                      filter: 'blur(0px)',
                    }
                  : phase === 'exit'
                    ? {
                        opacity: [1, 1, 0],
                        scale: [1.04, 1.55, 2.8],
                        filter: ['blur(0px)', 'blur(0px)', 'blur(12px)'],
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)',
                      }
            }
            transition={
              phase === 'burst'
                ? { duration: 0.48, ease: [0.22, 1, 0.36, 1] }
                : phase === 'exit'
                  ? { duration: 0.72, ease: [0.65, 0, 0.35, 1] }
                  : { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
            }
          >
            {/* Halo derrière logo */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-3xl sm:h-52 sm:w-52"
              animate={
                phase === 'burst' || phase === 'exit'
                  ? { scale: [1, 1.8, 2.4], opacity: [0.5, 0.9, 0] }
                  : { scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }
              }
              transition={
                phase === 'burst' || phase === 'exit'
                  ? { duration: 0.7 }
                  : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
              }
              aria-hidden
            />

            <img
              src={logo}
              alt="LD Didier"
              className="relative h-28 w-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.45)] sm:h-36 md:h-40"
              width={320}
              height={160}
              decoding="async"
            />
          </motion.div>

          {/* Flash surprise */}
          <AnimatePresence>
            {phase === 'burst' && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-20 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.35, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                aria-hidden
              />
            )}
          </AnimatePresence>

          {/* Progress UI */}
          <motion.div
            className="relative z-10 mt-12 flex w-[min(280px,70vw)] flex-col items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={
              phase === 'exit'
                ? { opacity: 0, y: 24, filter: 'blur(6px)' }
                : { opacity: 1, y: 0, filter: 'blur(0px)' }
            }
            transition={{ delay: phase === 'load' ? 0.35 : 0, duration: 0.45 }}
          >
            <div className="flex w-full items-end justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-muted">
              <span>Initializing</span>
              <span className="tabular-nums text-accent-cyan">{progress}%</span>
            </div>

            <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent via-accent-violet to-accent-cyan"
                style={{ width: barWidth }}
              />
              <motion.div
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ left: ['-20%', '120%'] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden
              />
            </div>

            <p className="font-mono text-[10px] tracking-[0.28em] text-slate-500 uppercase">
              {phase === 'burst' || phase === 'exit' ? 'Welcome' : 'Portfolio · LD Didier'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
