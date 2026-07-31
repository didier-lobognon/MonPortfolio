import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
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

type Token = { t: string; c: string }
type CodeLine = { tokens: Token[] }
type TabId = 'profile' | 'stack'

const PROFILE_LINES: CodeLine[] = [
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
]

const STACK_LINES: CodeLine[] = [
  { tokens: [{ t: '/**', c: 'cmt' }] },
  { tokens: [{ t: ' * Compétences techniques — niveaux 0–100', c: 'cmt' }] },
  { tokens: [{ t: ' */', c: 'cmt' }] },
  { tokens: [{ t: 'export', c: 'kw' }, { t: ' const', c: 'kw' }, { t: ' stack', c: 'var' }, { t: ' = {', c: 'plain' }] },
  {
    tokens: [
      { t: '  react', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: '92', c: 'num' },
      { t: ',', c: 'plain' },
      { t: '    ', c: 'plain' },
      { t: '// UI dynamiques', c: 'cmt' },
    ],
  },
  {
    tokens: [
      { t: '  angular', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: '84', c: 'num' },
      { t: ',', c: 'plain' },
      { t: '  ', c: 'plain' },
      { t: '// Apps structurées', c: 'cmt' },
    ],
  },
  {
    tokens: [
      { t: '  vue', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: '86', c: 'num' },
      { t: ',', c: 'plain' },
      { t: '      ', c: 'plain' },
      { t: '// Prototypes rapides', c: 'cmt' },
    ],
  },
  {
    tokens: [
      { t: '  node', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: '90', c: 'num' },
      { t: ',', c: 'plain' },
      { t: '     ', c: 'plain' },
      { t: '// APIs & services', c: 'cmt' },
    ],
  },
  {
    tokens: [
      { t: '  php', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: '88', c: 'num' },
      { t: ',', c: 'plain' },
      { t: '      ', c: 'plain' },
      { t: '// Laravel / métier', c: 'cmt' },
    ],
  },
  {
    tokens: [
      { t: '  python', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: '82', c: 'num' },
      { t: ',', c: 'plain' },
      { t: '   ', c: 'plain' },
      { t: '// Scripts & APIs', c: 'cmt' },
    ],
  },
  {
    tokens: [
      { t: '  java', c: 'key' },
      { t: ': ', c: 'plain' },
      { t: '78', c: 'num' },
      { t: ',', c: 'plain' },
      { t: '     ', c: 'plain' },
      { t: '// Backend robuste', c: 'cmt' },
    ],
  },
  {
    tokens: [
      { t: '} ', c: 'plain' },
      { t: 'satisfies', c: 'kw' },
      { t: ' Record', c: 'type' },
      { t: '<', c: 'plain' },
      { t: 'string', c: 'type' },
      { t: ', ', c: 'plain' },
      { t: 'number', c: 'type' },
      { t: '>', c: 'plain' },
    ],
  },
]

const FILES: Record<TabId, { label: string; lines: CodeLine[] }> = {
  profile: { label: 'profile.ts', lines: PROFILE_LINES },
  stack: { label: 'stack.ts', lines: STACK_LINES },
}

const STACK = [
  { id: 'react', label: 'React', color: 'text-[#61DAFB]' },
  { id: 'angular', label: 'Angular', color: 'text-[#DD0031]' },
  { id: 'vue', label: 'Vue', color: 'text-[#4FC08D]' },
  { id: 'nodejs', label: 'Node', color: 'text-[#339933]' },
  { id: 'php', label: 'PHP', color: 'text-[#777BB4]' },
  { id: 'python', label: 'Python', color: 'text-[#3776AB]' },
  { id: 'java', label: 'Java', color: 'text-[#ED8B00]' },
] as const

const tokenClass: Record<string, string> = {
  kw: 'text-[#c792ea]',
  var: 'text-[#82aaff]',
  key: 'text-[#f78c6c]',
  str: 'text-[#c3e88d]',
  hl: 'text-[#ffcb6b]',
  num: 'text-accent-cyan',
  type: 'text-[#89ddff]',
  cmt: 'text-slate-500',
  ok: 'text-emerald-400',
  plain: 'text-slate-300',
}

function useTypedLines(active: boolean, lineCount: number, resetKey: string) {
  const [visible, setVisible] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setVisible(0)
    setDone(false)
  }, [resetKey])

  useEffect(() => {
    if (!active) return
    if (visible >= lineCount) {
      setDone(true)
      return
    }
    const id = window.setTimeout(() => setVisible((v) => v + 1), 110 + visible * 20)
    return () => window.clearTimeout(id)
  }, [active, visible, lineCount])

  return { visible, done }
}

function CodePane({
  lines,
  visible,
  done,
}: {
  lines: CodeLine[]
  visible: number
  done: boolean
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-3 px-4 py-3.5 font-mono text-[12px] leading-7 sm:px-5 sm:py-4 sm:text-[13px] sm:leading-[1.75]">
      <div className="select-none text-right text-slate-600 tabular-nums" aria-hidden>
        {lines.map((_, i) => (
          <div key={i} className={i < visible ? 'text-slate-500' : ''}>
            {String(i + 1).padStart(2, '0')}
          </div>
        ))}
      </div>
      <div className="min-w-0 overflow-x-auto overflow-y-hidden">
        {lines.map((line, i) => (
          <div
            key={i}
            className="whitespace-pre"
            style={{
              opacity: i < visible ? 1 : 0.1,
              transition: 'opacity 0.18s ease',
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
  )
}

function HeroVisual() {
  const [tab, setTab] = useState<TabId>('profile')
  const [ready, setReady] = useState(false)
  const file = FILES[tab]
  const { visible, done } = useTypedLines(ready, file.lines.length, tab)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 90, damping: 22 })
  const sy = useSpring(my, { stiffness: 90, damping: 22 })
  const transform = useMotionTemplate`perspective(1400px) rotateY(${sx}deg) rotateX(${sy}deg)`

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 450)
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
        <div className="flex items-center gap-3 border-b border-white/[0.07] bg-[#0b1220] px-3 py-2 sm:px-4">
          <div className="flex shrink-0 gap-1.5 pl-1">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div
            className="flex min-w-0 flex-1 items-end gap-1 overflow-x-auto pt-1"
            role="tablist"
            aria-label="Fichiers"
          >
            {(Object.keys(FILES) as TabId[]).map((id) => {
              const active = tab === id
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  data-cursor="ouvrir"
                  onClick={() => setTab(id)}
                  className={`relative rounded-t-md px-3 py-1.5 font-mono text-[11px] transition-colors sm:text-xs ${
                    active
                      ? 'bg-[#121a2e] text-slate-100'
                      : 'text-slate-500 hover:bg-white/[0.04] hover:text-slate-300'
                  }`}
                >
                  {FILES[id].label}
                  {active && (
                    <motion.span
                      layoutId="hero-tab-indicator"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
          <span className="hidden shrink-0 font-mono text-[10px] tracking-wider text-emerald-400/90 sm:inline">
            main
          </span>
        </div>

        <div className="flex min-h-[300px]">
          <div
            className="hidden w-10 shrink-0 flex-col items-center gap-3.5 border-r border-white/[0.06] bg-[#080e1a] py-3 sm:flex"
            aria-hidden
          >
            <span className="h-4 w-4 rounded-sm border border-accent/40 bg-accent/15" />
            <span className="h-4 w-4 rounded-sm bg-white/5" />
            <span className="h-4 w-4 rounded-sm bg-white/5" />
            <span className="mt-auto h-4 w-4 rounded-full bg-white/5" />
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={tab}
                initial={{ opacity: 0, x: tab === 'stack' ? 28 : -28, filter: 'blur(4px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: tab === 'stack' ? -18 : 18, filter: 'blur(3px)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <CodePane lines={file.lines} visible={visible} done={done} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="border-t border-white/[0.07] bg-[#0b1220]">
          <div className="flex items-center justify-between gap-4 px-4 py-1.5 sm:px-5">
            <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 sm:text-[11px]">
              <span className="rounded bg-accent/15 px-1.5 py-0.5 text-accent">TS</span>
              <span>UTF-8</span>
              <span className="text-slate-600">|</span>
              <span>
                {file.label} · Ln {Math.min(Math.max(visible, 1), file.lines.length)}
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
                className="inline-flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-slate-200"
              >
                <SkillIcon name={tech.id} className={`h-4 w-4 ${tech.color}`} />
                <span className={`font-mono text-[10px] tracking-wide sm:text-[11px] ${tech.color}`}>
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
      className="relative flex min-h-screen items-center overflow-x-hidden pt-32 pb-16"
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

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-name text-[clamp(1.85rem,4.8vw,3.15rem)] font-bold leading-[1.15] tracking-[-0.03em] text-text whitespace-nowrap">
              {personalInfo.name}
            </h1>
          </motion.div>

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
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-muted sm:text-base"
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
