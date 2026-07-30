import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

type CursorMode = 'default' | 'hover' | 'press'

const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor]'

/**
 * Curseur « instrument de précision » — desktop uniquement.
 * Point central réactif, anneau inertiel, cadre de sélection au survol.
 */
export function CustomCursor() {
  const isFine = useMediaQuery('(pointer: fine)')
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const [mode, setMode] = useState<CursorMode>('default')
  const [visible, setVisible] = useState(false)
  const [label, setLabel] = useState<string | null>(null)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const dotX = useSpring(rawX, { stiffness: 900, damping: 45, mass: 0.15 })
  const dotY = useSpring(rawY, { stiffness: 900, damping: 45, mass: 0.15 })
  const ringX = useSpring(rawX, { stiffness: 220, damping: 28, mass: 0.35 })
  const ringY = useSpring(rawY, { stiffness: 220, damping: 28, mass: 0.35 })

  useEffect(() => {
    if (!isFine) return
    document.body.classList.add('has-custom-cursor')
    return () => document.body.classList.remove('has-custom-cursor')
  }, [isFine])

  useEffect(() => {
    if (!isFine) return

    const resolveTarget = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return null
      return el.closest(INTERACTIVE)
    }

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      setVisible(true)

      const target = resolveTarget(e.target)
      if (target) {
        setMode((m) => (m === 'press' ? 'press' : 'hover'))
        const custom = target.getAttribute('data-cursor')
        setLabel(custom && custom !== 'hover' ? custom : null)
      } else {
        setMode((m) => (m === 'press' ? 'press' : 'default'))
        setLabel(null)
      }
    }

    const onDown = () => setMode('press')
    const onUp = (e: MouseEvent) => {
      setMode(resolveTarget(e.target) ? 'hover' : 'default')
    }
    const onLeave = () => {
      setVisible(false)
      setMode('default')
      setLabel(null)
    }
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [isFine, rawX, rawY])

  if (!isFine) return null

  const hovering = mode === 'hover'
  const pressing = mode === 'press'
  const ringScale = pressing ? 0.72 : hovering ? 1.55 : 1
  const dotScale = pressing ? 0.45 : hovering ? 0 : 1

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] overflow-hidden"
      aria-hidden
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.25s ease' }}
    >
      {/* Halo soft — suit l’anneau */}
      <motion.div
        className="absolute"
        style={{ left: ringX, top: ringY, x: '-50%', y: '-50%' }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: hovering ? 72 : 40,
            height: hovering ? 72 : 40,
            opacity: pressing ? 0.15 : hovering ? 0.28 : 0.18,
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 280, damping: 24 }
          }
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(34,211,238,0.12) 45%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Anneau principal */}
      <motion.div
        className="absolute"
        style={{ left: ringX, top: ringY, x: '-50%', y: '-50%' }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{ scale: ringScale }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 320, damping: 22 }
          }
        >
          {/* Cercle */}
          <motion.div
            className="rounded-full border"
            animate={{
              width: hovering ? 52 : 36,
              height: hovering ? 52 : 36,
              borderColor: hovering
                ? 'rgba(59, 130, 246, 0.85)'
                : 'rgba(148, 163, 184, 0.45)',
              backgroundColor: hovering
                ? 'rgba(59, 130, 246, 0.08)'
                : 'transparent',
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: 'spring', stiffness: 300, damping: 24 }
            }
          />

          {/* Croix de précision (état défaut) */}
          <AnimatePresence>
            {!hovering && (
              <motion.div
                key="crosshair"
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <span className="absolute top-1/2 left-0 h-px w-1.5 -translate-y-1/2 bg-accent-cyan/80" />
                <span className="absolute top-1/2 right-0 h-px w-1.5 -translate-y-1/2 bg-accent-cyan/80" />
                <span className="absolute left-1/2 top-0 h-1.5 w-px -translate-x-1/2 bg-accent-cyan/80" />
                <span className="absolute left-1/2 bottom-0 h-1.5 w-px -translate-x-1/2 bg-accent-cyan/80" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Coins type sélection (état hover) */}
          <AnimatePresence>
            {hovering && (
              <motion.div
                key="brackets"
                className="absolute"
                style={{ width: 52, height: 52 }}
                initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotate: 6 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: 'spring', stiffness: 380, damping: 20 }
                }
              >
                <Corner className="absolute top-0 left-0 border-t border-l" />
                <Corner className="absolute top-0 right-0 border-t border-r" />
                <Corner className="absolute bottom-0 left-0 border-b border-l" />
                <Corner className="absolute bottom-0 right-0 border-b border-r" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Label optionnel (data-cursor="…") */}
          <AnimatePresence>
            {label && hovering && (
              <motion.span
                key={label}
                className="absolute top-full mt-2 whitespace-nowrap rounded-md border border-accent/30 bg-surface/90 px-2 py-0.5 font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-accent-cyan backdrop-blur-sm"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.18 }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Point central — disparaît au hover pour laisser place au cadre */}
      <motion.div
        className="absolute"
        style={{ left: dotX, top: dotY, x: '-50%', y: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-text mix-blend-difference"
          animate={{
            scale: dotScale,
            width: pressing ? 6 : 8,
            height: pressing ? 6 : 8,
            opacity: hovering ? 0 : 1,
          }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 500, damping: 28 }
          }
        />
      </motion.div>
    </div>
  )
}

function Corner({ className }: { className: string }) {
  return (
    <span
      className={`h-2.5 w-2.5 border-accent ${className}`}
      style={{ boxShadow: '0 0 8px rgba(59, 130, 246, 0.35)' }}
    />
  )
}
