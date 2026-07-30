import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState, type MouseEvent } from 'react'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AnimatedText } from '@/components/shared/AnimatedText'
import { MagneticButton } from '@/components/shared/MagneticButton'
import { ParticleBackground } from '@/components/shared/ParticleBackground'
import { GradientMesh } from '@/components/shared/GradientMesh'
import { SkillIcon } from '@/components/shared/SkillIcon'
import { scrollToSection } from '@/lib/utils'

const CODE_LINES = [
  { tokens: [{ t: 'const', c: 'kw' }, { t: ' engineer', c: 'var' }, { t: ' = {', c: 'plain' }] },
  { tokens: [{ t: '  name', c: 'key' }, { t: ': ', c: 'plain' }, { t: `'${personalInfo.firstName}'`, c: 'str' }, { t: ',', c: 'plain' }] },
  { tokens: [{ t: '  role', c: 'key' }, { t: ': ', c: 'plain' }, { t: `'Full Stack'`, c: 'str' }, { t: ',', c: 'plain' }] },
  { tokens: [{ t: '  focus', c: 'key' }, { t: ': [', c: 'plain' }, { t: `'UX'`, c: 'str' }, { t: ', ', c: 'plain' }, { t: `'API'`, c: 'str' }, { t: ', ', c: 'plain' }, { t: `'Perf'`, c: 'str' }, { t: '],', c: 'plain' }] },
  { tokens: [{ t: '  ship', c: 'key' }, { t: ': ', c: 'plain' }, { t: '()', c: 'fn' }, { t: ' => ', c: 'plain' }, { t: `'production'`, c: 'str' }, { t: ',', c: 'plain' }] },
  { tokens: [{ t: '}', c: 'plain' }, { t: ' as', c: 'kw' }, { t: ' const', c: 'kw' }] },
] as const

const STACK = ['react', 'typescript', 'nestjs', 'postgresql', 'docker'] as const

const tokenClass: Record<string, string> = {
  kw: 'text-accent-violet',
  var: 'text-accent-cyan',
  key: 'text-sky-300',
  str: 'text-emerald-400',
  fn: 'text-amber-300',
  plain: 'text-slate-300',
}

function useTypedLines(active: boolean) {
  const [visible, setVisible] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!active) return
    if (visible >= CODE_LINES.length) {
      setDone(true)
      return
    }
    const id = window.setTimeout(() => setVisible((v) => v + 1), 280 + visible * 40)
    return () => window.clearTimeout(id)
  }, [active, visible])

  return { visible, done }
}

/** Panneau IDE — ancre visuelle métier du Hero */
function HeroVisual() {
  const [ready, setReady] = useState(false)
  const { visible, done } = useTypedLines(ready)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 20 })
  const sy = useSpring(my, { stiffness: 80, damping: 20 })
  const transform = useMotionTemplate`perspective(1200px) rotateY(${sx}deg) rotateX(${sy}deg)`

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 700)
    return () => window.clearTimeout(t)
  }, [])

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(px * 8)
    my.set(py * -6)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[520px]"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute -inset-8 rounded-[40%] bg-accent/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-8 h-48 w-48 rounded-full bg-accent-cyan/10 blur-3xl"
        aria-hidden
      />

      {/* Calque arrière — profondeur */}
      <motion.div
        aria-hidden
        className="absolute -right-3 top-8 hidden h-[78%] w-[92%] rounded-2xl border border-white/5 bg-surface/40 sm:block"
        style={{ rotate: 3, y: 12 }}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.7 }}
      />

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1020]/95 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        style={{ transform }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Barre titre */}
        <div className="flex items-center gap-3 border-b border-white/8 bg-[#0d1528] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2">
            <span className="truncate rounded-md bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300">
              engineer.ts
            </span>
            <span className="hidden rounded-md px-2 py-1 font-mono text-[11px] text-slate-500 sm:inline">
              +2
            </span>
          </div>
          <span className="font-mono text-[10px] tracking-wider text-emerald-400/90">
            ● live
          </span>
        </div>

        {/* Corps code */}
        <div className="relative grid grid-cols-[auto_1fr] gap-x-3 px-4 py-5 font-mono text-[12px] leading-6 sm:text-[13px] sm:leading-7">
          <div className="select-none text-right text-slate-600" aria-hidden>
            {CODE_LINES.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="min-w-0 overflow-hidden">
            {CODE_LINES.map((line, i) => (
              <div
                key={i}
                className="whitespace-pre"
                style={{
                  opacity: i < visible ? 1 : 0,
                  transition: 'opacity 0.25s ease',
                }}
              >
                {line.tokens.map((tok, j) => (
                  <span key={j} className={tokenClass[tok.c]}>
                    {tok.t}
                  </span>
                ))}
                {i === visible - 1 && !done && (
                  <motion.span
                    className="ml-0.5 inline-block h-4 w-[2px] translate-y-0.5 bg-accent-cyan align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  />
                )}
              </div>
            ))}
            {done && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-slate-500"
              >
                <span className="text-accent-violet">export</span>
                {' type '}
                <span className="text-accent-cyan">{'{ Engineer }'}</span>
              </motion.div>
            )}
          </div>

          {/* Scanline discrète */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[length:100%_28px]"
            aria-hidden
          />
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/8 bg-[#0d1528] px-4 py-2 font-mono text-[10px] text-slate-500">
          <span>TypeScript · UTF-8</span>
          <span className="text-accent/90">Ln {Math.min(visible, CODE_LINES.length)}, Col 1</span>
        </div>
      </motion.div>

      {/* Stack tech — bandeau intégré sous l’IDE, pas des cards */}
      <motion.div
        className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:justify-start sm:pl-1"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        {STACK.map((id) => (
          <span
            key={id}
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-text"
          >
            <SkillIcon name={id} className="h-4 w-4 opacity-80" />
            <span className="font-mono text-[11px] tracking-wide uppercase">
              {id === 'nestjs' ? 'NestJS' : id === 'postgresql' ? 'SQL' : id}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      <GradientMesh />
      <ParticleBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Badge className="mb-6 gap-2 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {personalInfo.availability}
            </Badge>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mb-3 text-sm font-medium tracking-widest uppercase text-muted"
          >
            {personalInfo.name}
          </motion.p>

          <AnimatedText
            text={personalInfo.title}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]"
            delay={0.4}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-6 max-w-lg text-base sm:text-lg text-muted leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Button
                size="lg"
                variant="gradient"
                className="gap-2"
                data-cursor="projets"
                onClick={() => scrollToSection('projects')}
              >
                Voir mes projets
                <ArrowRight size={18} />
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
                data-cursor="contact"
                onClick={() => scrollToSection('contact')}
              >
                <Sparkles size={16} />
                Me contacter
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <div className="relative lg:justify-self-end">
          <HeroVisual />
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-text transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        aria-label="Défiler vers À propos"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  )
}
