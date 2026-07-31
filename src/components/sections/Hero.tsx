import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState, type MouseEvent } from 'react'
import { ArrowDown, ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { Button } from '@/components/ui/button'
import { AnimatedText } from '@/components/shared/AnimatedText'
import { MagneticButton } from '@/components/shared/MagneticButton'
import { ParticleBackground } from '@/components/shared/ParticleBackground'
import { GradientMesh } from '@/components/shared/GradientMesh'
import { SkillIcon } from '@/components/shared/SkillIcon'
import { scrollToSection } from '@/lib/utils'

/** Fichier TypeScript — stack & valeur pour recruteurs */
const CODE_LINES = [
  { tokens: [{ t: '/**', c: 'cmt' }] },
  { tokens: [{ t: ' * Stack & delivery — prêt pour collab produit', c: 'cmt' }] },
  { tokens: [{ t: ' */', c: 'cmt' }] },
  { tokens: [{ t: 'export', c: 'kw' }, { t: ' const', c: 'kw' }, { t: ' profile', c: 'var' }, { t: ' = {', c: 'plain' }] },
  {
    tokens: [
      { t: '  frontend', c: 'key' },
      { t: ': [', c: 'plain' },
      { t: `'React'`, c: 'str' },
      { t: ', ', c: 'plain' },
      { t: `'Angular'`, c: 'hl' },
      { t: ', ', c: 'plain' },
      { t: `'Vue.js'`, c: 'hl' },
      { t: '],', c: 'plain' },
    ],
  },
  {
    tokens: [
      { t: '  backend', c: 'key' },
      { t: ': [', c: 'plain' },
      { t: `'Node.js'`, c: 'hl' },
      { t: ', ', c: 'plain' },
      { t: `'PHP'`, c: 'hl' },
      { t: ', ', c: 'plain' },
      { t: `'Python'`, c: 'hl' },
      { t: ', ', c: 'plain' },
      { t: `'Java'`, c: 'hl' },
      { t: '],', c: 'plain' },
    ],
  },
  {
    tokens: [
      { t: '  focus', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: `'Apps web scalables · API · UX'`, c: 'str' },
      { t: ',', c: 'plain' },
    ],
  },
  {
    tokens: [
      { t: '  ships', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: `'Brief → produit en production'`, c: 'str' },
      { t: ',', c: 'plain' },
    ],
  },
  {
    tokens: [
      { t: '  openTo', c: 'key' },
      { t: ': [', c: 'plain' },
      { t: `'CDI'`, c: 'str' },
      { t: ', ', c: 'plain' },
      { t: `'Freelance'`, c: 'str' },
      { t: ', ', c: 'plain' },
      { t: `'Remote'`, c: 'str' },
      { t: '],', c: 'plain' },
    ],
  },
  {
    tokens: [
      { t: '  status', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: `'OPEN_TO_WORK'`, c: 'ok' },
      { t: ',', c: 'plain' },
    ],
  },
  { tokens: [{ t: '} ', c: 'plain' }, { t: 'as', c: 'kw' }, { t: ' const', c: 'kw' }] },
  { tokens: [{ t: '', c: 'plain' }] },
  {
    tokens: [
      { t: 'export', c: 'kw' },
      { t: ' type ', c: 'plain' },
      { t: 'Profile', c: 'type' },
      { t: ' = ', c: 'plain' },
      { t: 'typeof', c: 'kw' },
      { t: ' profile', c: 'var' },
    ],
  },
]

const STACK = [
  { id: 'react', label: 'React' },
  { id: 'angular', label: 'Angular' },
  { id: 'vue', label: 'Vue' },
  { id: 'nodejs', label: 'Node' },
  { id: 'php', label: 'PHP' },
  { id: 'python', label: 'Python' },
  { id: 'java', label: 'Java' },
] as const

const tokenClass: Record<string, string> = {
  kw: 'text-[#c792ea]',
  var: 'text-[#82aaff]',
  key: 'text-[#f78c6c]',
  str: 'text-[#c3e88d]',
  hl: 'text-[#ffcb6b]',
  type: 'text-[#89ddff]',
  cmt: 'text-slate-500',
  ok: 'text-emerald-400',
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
    const id = window.setTimeout(() => setVisible((v) => v + 1), 180 + visible * 30)
    return () => window.clearTimeout(id)
  }, [active, visible])

  return { visible, done }
}

function HeroVisual() {
  const [ready, setReady] = useState(false)
  const { visible, done } = useTypedLines(ready)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 90, damping: 22 })
  const sy = useSpring(my, { stiffness: 90, damping: 22 })
  const transform = useMotionTemplate`perspective(1400px) rotateY(${sx}deg) rotateX(${sy}deg)`

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 550)
    return () => window.clearTimeout(t)
  }, [])

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(px * 5)
    my.set(py * -3.5)
  }

  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[620px] lg:max-w-none"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        className="pointer-events-none absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_65%)]"
        aria-hidden
      />

      <motion.div
        aria-hidden
        className="absolute -right-3 top-8 hidden h-[80%] w-[94%] rounded-2xl border border-white/[0.05] bg-gradient-to-br from-white/[0.03] to-transparent lg:block"
        style={{ rotate: 2, y: 12 }}
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      />

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b16]/96 shadow-[0_36px_90px_rgba(0,0,0,0.5)]"
        style={{ transform }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 border-b border-white/[0.07] bg-[#0b1220] px-4 py-3 sm:px-5">
          <div className="flex shrink-0 gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto">
            <span className="rounded-t-md border border-b-0 border-white/10 bg-[#121a2e] px-3 py-1 font-mono text-[11px] text-slate-200">
              profile.ts
            </span>
            <span className="hidden rounded-t-md px-3 py-1 font-mono text-[11px] text-slate-500 sm:inline">
              stack.ts
            </span>
          </div>
          <span className="hidden shrink-0 items-center gap-1.5 font-mono text-[10px] tracking-wider text-emerald-400/90 sm:inline-flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            main
          </span>
        </div>

        <div className="flex min-h-[300px] sm:min-h-[330px]">
          <div
            className="hidden w-10 shrink-0 flex-col items-center gap-3.5 border-r border-white/[0.06] bg-[#080e1a] py-3.5 sm:flex"
            aria-hidden
          >
            <span className="h-4 w-4 rounded-sm border border-accent/40 bg-accent/15" />
            <span className="h-4 w-4 rounded-sm bg-white/5" />
            <span className="h-4 w-4 rounded-sm bg-white/5" />
            <span className="mt-auto h-4 w-4 rounded-full bg-white/5" />
          </div>

          <div className="relative min-w-0 flex-1">
            <div className="grid grid-cols-[auto_1fr] gap-x-3.5 px-4 py-5 font-mono text-[12.5px] leading-7 sm:px-5 sm:py-6 sm:text-[13.5px] sm:leading-8">
              <div className="select-none text-right text-slate-600 tabular-nums" aria-hidden>
                {CODE_LINES.map((_, i) => (
                  <div key={i} className={i < visible ? 'text-slate-500' : ''}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                ))}
              </div>
              <div className="min-w-0 overflow-x-auto overflow-y-hidden">
                {CODE_LINES.map((line, i) => (
                  <div
                    key={i}
                    className="whitespace-pre"
                    style={{
                      opacity: i < visible ? 1 : 0.1,
                      transition: 'opacity 0.2s ease',
                    }}
                  >
                    {line.tokens.length === 1 && line.tokens[0].t === '' ? (
                      <span>&nbsp;</span>
                    ) : (
                      line.tokens.map((tok, j) => (
                        <span key={j} className={tokenClass[tok.c]}>
                          {tok.t}
                        </span>
                      ))
                    )}
                    {i === visible - 1 && !done && (
                      <motion.span
                        className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[2px] bg-accent-cyan align-middle"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.65, repeat: Infinity }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pied structuré : meta | stack */}
        <div className="border-t border-white/[0.07] bg-[#0b1220]">
          <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-5">
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 sm:text-[11px]">
              <span className="rounded bg-accent/15 px-1.5 py-0.5 text-accent">TS</span>
              <span>UTF-8</span>
              <span className="text-slate-600">|</span>
              <span>
                Ln {Math.min(Math.max(visible, 1), CODE_LINES.length)}
              </span>
            </div>
            <span className="font-mono text-[10px] text-slate-500 sm:text-[11px]">
              Spaces: 2
            </span>
          </div>
          <div className="flex items-center gap-1 overflow-x-auto border-t border-white/[0.05] px-3 py-2 sm:px-4">
            {STACK.map((tech) => (
              <span
                key={tech.id}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
              >
                <SkillIcon name={tech.id} className="h-3.5 w-3.5" />
                <span className="font-mono text-[10px] tracking-wide sm:text-[11px]">
                  {tech.label}
                </span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <GradientMesh />
      <ParticleBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
        <div className="flex max-w-xl flex-col lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-7"
          >
            <div
              className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 shadow-[0_0_28px_rgba(52,211,153,0.22)] backdrop-blur-sm"
              role="status"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              </span>
              <span className="tracking-wide">{personalInfo.availability}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.35rem] font-extrabold tracking-tight text-text sm:text-5xl lg:text-[3.35rem]"
          >
            <span className="block leading-[1.15]">{personalInfo.firstName}</span>
            <span className="block leading-[1.25] pb-1">{personalInfo.lastName}</span>
          </motion.h1>

          <AnimatedText
            text={personalInfo.title}
            as="p"
            className="mt-3 font-display text-xl font-semibold tracking-tight text-accent sm:text-2xl"
            delay={0.4}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-base"
          >
            {personalInfo.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted/80"
          >
            <MapPin size={14} className="text-accent/70" aria-hidden />
            {personalInfo.location}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
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

        <div className="relative w-full">
          <HeroVisual />
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.15 }}
        aria-label="Défiler vers À propos"
      >
        <span className="text-[10px] tracking-[0.22em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.button>
    </section>
  )
}
