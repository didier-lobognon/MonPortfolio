import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { skills } from '@/data/skills'
import { SkillIcon } from '@/components/shared/SkillIcon'
import { viewportOnce } from '@/lib/animations'
import type { Skill, SkillCategory } from '@/types'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

type DomainKey = SkillCategory | 'core'

const CORE_IDS = ['react', 'typescript', 'nodejs', 'nestjs', 'postgresql', 'docker'] as const

/** Sélection par domaine — stack enrichie */
const DOMAIN_IDS: Record<SkillCategory, string[]> = {
  frontend: [
    'react',
    'angular',
    'vue',
    'nextjs',
    'typescript',
    'bootstrap',
    'reactnative',
    'flutter',
  ],
  backend: [
    'nodejs',
    'express',
    'nestjs',
    'php',
    'laravel',
    'java',
    'spring',
    'springboot',
    'python',
    'fastapi',
    'flask',
  ],
  database: ['postgresql', 'mysql', 'mongodb'],
  tools: [
    'git',
    'github',
    'gitlab',
    'bash',
    'docker',
    'docusaurus',
    'moodle',
    'wordpress',
  ],
}

const BRAND: Record<string, string> = {
  react: '#61DAFB',
  angular: '#DD0031',
  vue: '#4FC08D',
  nextjs: '#FFFFFF',
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  tailwind: '#06B6D4',
  bootstrap: '#7952B3',
  reactnative: '#61DAFB',
  flutter: '#02569B',
  nodejs: '#339933',
  express: '#FFFFFF',
  nestjs: '#E0234E',
  php: '#777BB4',
  laravel: '#FF2D20',
  java: '#ED8B00',
  spring: '#6DB33F',
  springboot: '#6DB33F',
  python: '#3776AB',
  fastapi: '#009688',
  flask: '#FFFFFF',
  postgresql: '#4169E1',
  mysql: '#4479A1',
  mongodb: '#47A248',
  git: '#F05032',
  github: '#E6EDF3',
  gitlab: '#FC6D26',
  bash: '#4EAA25',
  docker: '#2496ED',
  docusaurus: '#3ECC5F',
  moodle: '#F98012',
  wordpress: '#21759B',
  postman: '#FF6C37',
}

function skillById(id: string): Skill | undefined {
  return skills.find((s) => s.id === id)
}

function MasteryBar({
  value,
  color,
  active,
}: {
  value: number
  color: string
  active: boolean
}) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
      <motion.div
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        initial={{ width: 0 }}
        animate={{ width: active ? `${value}%` : 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
      />
    </div>
  )
}

export function Skills() {
  const { t, locale } = useLanguage()
  const [domain, setDomain] = useState<DomainKey>('core')
  const listRef = useRef<HTMLDivElement>(null)
  const inView = useInView(listRef, { once: false, amount: 0.2 })

  const domains = useMemo(
    () =>
      [
        { key: 'core' as const, label: t.skills.coreLabel },
        { key: 'frontend' as const, label: 'Frontend' },
        { key: 'backend' as const, label: 'Backend' },
        { key: 'database' as const, label: 'Data' },
        {
          key: 'tools' as const,
          label: locale === 'fr' ? 'Outils' : 'Tools',
        },
      ] as const,
    [t.skills.coreLabel, locale],
  )

  const coreSkills = useMemo(
    () => CORE_IDS.map(skillById).filter(Boolean) as Skill[],
    [],
  )

  const domainSkills = useMemo(() => {
    if (domain === 'core') return coreSkills
    return DOMAIN_IDS[domain].map(skillById).filter(Boolean) as Skill[]
  }, [domain, coreSkills])

  return (
    <section id="skills" className="relative overflow-x-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 70% 20%, rgba(59,130,246,0.12), transparent 55%), radial-gradient(ellipse 40% 35% at 20% 80%, rgba(34,211,238,0.08), transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-4 font-medium text-sm tracking-[0.22em] uppercase text-accent">
            {t.skills.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            {t.skills.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {t.skills.description}
          </p>
          <p className="mt-5 font-name text-sm font-medium tracking-tight text-accent-cyan sm:text-base">
            {t.skills.reassurance}
          </p>
        </motion.div>

        {/* Domain tabs */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <p className="font-mono text-[11px] tracking-[0.2em] text-slate-500 uppercase">
            {t.skills.domainsLabel}
          </p>
          <div
            className="relative inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5"
            role="tablist"
            aria-label={t.skills.domainsLabel}
          >
            {domains.map((d) => {
              const active = domain === d.key
              return (
                <button
                  key={d.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  data-cursor={d.label}
                  onClick={() => setDomain(d.key)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active ? 'text-text' : 'text-muted hover:text-text/85',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="skills-domain-pill"
                      className="absolute inset-0 rounded-full border border-accent/35 bg-accent/15 shadow-[0_0_24px_rgba(59,130,246,0.18)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{d.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Grille de cartes carrées — 5 par ligne */}
        <div ref={listRef} className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={domain}
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {domainSkills.map((skill, i) => {
                const color = BRAND[skill.id] ?? '#3b82f6'
                return (
                  <motion.article
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.92, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.05 * i,
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group relative flex aspect-square w-[calc((100%-0.75rem)/2)] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1220]/80 p-4 backdrop-blur-sm sm:w-[calc((100%-2rem)/3)] sm:rounded-3xl sm:p-5 md:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-4rem)/5)]"
                    style={{
                      boxShadow: `0 0 0 1px ${color}14, 0 18px 40px rgba(0,0,0,0.28)`,
                    }}
                  >
                    <span
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at 50% 20%, ${color}28, transparent 60%)`,
                      }}
                      aria-hidden
                    />

                    <div className="relative flex items-start justify-between gap-2">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] sm:h-12 sm:w-12"
                        style={{ color }}
                      >
                        <SkillIcon name={skill.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <span className="font-mono text-[11px] tabular-nums text-muted sm:text-xs">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="relative mt-auto pt-3">
                      <h3 className="font-display text-sm font-semibold text-text sm:text-base">
                        {skill.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-muted sm:text-xs">
                        {skill.description}
                      </p>
                      <div className="mt-3">
                        <MasteryBar value={skill.level} color={color} active={inView} />
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </AnimatePresence>

          <p className="mt-6 text-center font-mono text-[11px] tracking-wide text-slate-500">
            {domainSkills.length} · {t.skills.mastery}
          </p>
        </div>
      </div>
    </section>
  )
}
