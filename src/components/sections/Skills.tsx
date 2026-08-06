import { useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { skills } from '@/data/skills'
import { SkillRing } from '@/components/shared/SkillRing'
import { viewportOnce } from '@/lib/animations'
import type { Skill, SkillCategory } from '@/types'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'
import { useMediaQuery } from '@/hooks/useMediaQuery'

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
    'nginx',
    'apache',
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
  nginx: '#009639',
  apache: '#D22128',
  docusaurus: '#3ECC5F',
  moodle: '#F98012',
  wordpress: '#21759B',
  postman: '#FF6C37',
}

function skillById(id: string): Skill | undefined {
  return skills.find((s) => s.id === id)
}

export function Skills() {
  const { t, locale } = useLanguage()
  const [domain, setDomain] = useState<DomainKey>('core')
  const listRef = useRef<HTMLDivElement>(null)
  const inView = useInView(listRef, { once: false, amount: 0.15 })
  const isSm = useMediaQuery('(min-width: 640px)')

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

  const ringSize = isSm ? 120 : 100

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

        <div className="mb-10 flex flex-col items-center gap-4">
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

        <div ref={listRef} className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={domain}
              initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:gap-x-10"
            >
              {domainSkills.map((skill, i) => {
                const color = BRAND[skill.id] ?? '#3b82f6'
                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.88, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.04 * i,
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ y: -4 }}
                  >
                    <SkillRing
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                      color={color}
                      active={inView}
                      size={ringSize}
                      delay={0.06 * i}
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          <p className="mt-10 text-center font-mono text-[11px] tracking-wide text-slate-500">
            {domainSkills.length} · {t.skills.mastery}
          </p>
        </div>
      </div>
    </section>
  )
}
