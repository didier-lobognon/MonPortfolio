import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '@/data/projects'
import { viewportOnce } from '@/lib/animations'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

type FilterKey = 'all' | 'featured'

const THEME: Record<string, { accent: string; soft: string; label: string }> = {
  'nexus-dashboard': { accent: '#3B82F6', soft: 'rgba(59,130,246,0.22)', label: 'Analytics' },
  'aurora-ecommerce': { accent: '#F43F5E', soft: 'rgba(244,63,94,0.22)', label: 'E-commerce' },
  'pulse-api': { accent: '#22D3EE', soft: 'rgba(34,211,238,0.22)', label: 'API' },
  'haven-crm': { accent: '#10B981', soft: 'rgba(16,185,129,0.22)', label: 'CRM' },
  'orbit-portfolio': { accent: '#F59E0B', soft: 'rgba(245,158,11,0.22)', label: 'Studio' },
  'forge-tasks': { accent: '#38BDF8', soft: 'rgba(56,189,248,0.22)', label: 'Collab' },
}

function themeOf(id: string) {
  return THEME[id] ?? { accent: '#3B82F6', soft: 'rgba(59,130,246,0.22)', label: 'Projet' }
}

function SpotlightCard({
  project,
  index,
  featured,
}: {
  project: Project
  index: number
  featured?: boolean
}) {
  const theme = themeOf(project.id)
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, ${theme.soft}, transparent 55%)`

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(((e.clientX - r.left) / r.width) * 100)
        my.set(((e.clientY - r.top) / r.height) * 100)
      }}
      whileHover={{ y: -8 }}
      className={cn(
        'group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0b1220]/85 backdrop-blur-sm',
        featured ? 'md:col-span-2 lg:col-span-7' : 'lg:col-span-5',
      )}
      style={{
        boxShadow: `0 0 0 1px ${theme.accent}18, 0 24px 60px rgba(0,0,0,0.35)`,
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glow }}
        aria-hidden
      />

      <div
        className={cn(
          'relative grid',
          featured ? 'lg:grid-cols-[1.15fr_0.85fr]' : 'grid-rows-[auto_1fr]',
        )}
      >
        {/* Media */}
        <div
          className={cn(
            'relative overflow-hidden',
            featured ? 'aspect-[16/11] lg:aspect-auto lg:min-h-[340px]' : 'aspect-[16/10]',
          )}
        >
          <img
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            loading="lazy"
          />
          <div
            className="absolute inset-0 opacity-70 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(135deg, ${theme.accent}55, transparent 55%)`,
            }}
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/40 to-transparent lg:hidden" />

          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className="rounded-lg border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[11px] text-white/90 backdrop-blur-md"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <span
              className="rounded-lg border px-2.5 py-1 text-[11px] font-medium backdrop-blur-md"
              style={{
                color: theme.accent,
                borderColor: `${theme.accent}55`,
                background: `${theme.accent}22`,
              }}
            >
              {theme.label}
            </span>
          </div>

          {project.featured && (
            <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
              <Sparkles className="h-3 w-3" style={{ color: theme.accent }} />
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <div className="relative flex flex-col justify-between p-6 sm:p-7 lg:p-8">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span
                className="h-px w-8"
                style={{ background: `linear-gradient(90deg, ${theme.accent}, transparent)` }}
                aria-hidden
              />
              <span className="font-mono text-[11px] tracking-[0.18em] text-slate-500 uppercase">
                {project.year}
              </span>
            </div>

            <h3 className="font-display text-2xl font-bold tracking-tight text-text sm:text-[1.7rem]">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
              {featured ? project.longDescription : project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300 transition-colors duration-300 group-hover:border-white/20"
                  style={{ boxShadow: `inset 0 0 0 1px ${theme.accent}10` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                data-cursor="Démo"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-[#050816] transition-transform duration-300 hover:scale-[1.03]"
                style={{
                  background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent}cc)`,
                  boxShadow: `0 10px 30px ${theme.accent}33`,
                }}
              >
                Voir le projet
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="GitHub"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-2.5 text-sm text-text transition-colors hover:border-white/25 hover:bg-white/[0.07]"
              >
                <FaGithub size={15} />
                Code
              </a>
            )}
            {!project.demo && project.github && (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                <ExternalLink className="h-3.5 w-3.5" />
                Repo disponible
              </span>
            )}
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.accent}, transparent)`,
        }}
        aria-hidden
      />
    </motion.article>
  )
}

function CompactCard({ project, index }: { project: Project; index: number }) {
  const theme = themeOf(project.id)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.48, delay: 0.05 * index, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7, scale: 1.015 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0b1220]/80"
      style={{
        boxShadow: `0 0 0 1px ${theme.accent}14, 0 18px 40px rgba(0,0,0,0.3)`,
      }}
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(180deg, transparent 35%, #0b1220 100%), linear-gradient(135deg, ${theme.accent}40, transparent 50%)`,
          }}
        />
        <span className="absolute top-3 left-3 rounded-md bg-black/40 px-2 py-1 font-mono text-[10px] text-white/85 backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-text">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-slate-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-md px-2 py-0.5 text-[10px] text-slate-500">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-5">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              data-cursor="Démo"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold text-[#050816] transition-transform hover:scale-[1.02]"
              style={{ background: theme.accent }}
            >
              Démo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-text hover:bg-white/[0.08]"
              aria-label={`GitHub — ${project.title}`}
            >
              <FaGithub size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const { t, locale } = useLanguage()
  const [filter, setFilter] = useState<FilterKey>('all')

  const featured = useMemo(() => projects.filter((p) => p.featured), [])
  const secondary = useMemo(() => projects.filter((p) => !p.featured), [])

  const filters = [
    { key: 'all' as const, label: locale === 'fr' ? 'Tous' : 'All' },
    { key: 'featured' as const, label: locale === 'fr' ? 'Vedettes' : 'Featured' },
  ]

  return (
    <section id="projects" className="relative overflow-x-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 55% 40% at 15% 15%, rgba(244,63,94,0.10), transparent 55%), radial-gradient(ellipse 45% 35% at 85% 30%, rgba(34,211,238,0.10), transparent 50%), radial-gradient(ellipse 40% 40% at 50% 90%, rgba(59,130,246,0.10), transparent 55%)',
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
            {t.projects.eyebrow}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl md:text-5xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {t.projects.description}
          </p>
        </motion.div>

        <div className="mb-10 flex justify-center">
          <div
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5"
            role="tablist"
            aria-label={locale === 'fr' ? 'Filtrer les projets' : 'Filter projects'}
          >
            {filters.map((f) => {
              const active = filter === f.key
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  data-cursor={f.label}
                  onClick={() => setFilter(f.key)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    active ? 'text-text' : 'text-muted hover:text-text/85',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="projects-filter-pill"
                      className="absolute inset-0 rounded-full border border-accent-cyan/35 bg-accent-cyan/15 shadow-[0_0_24px_rgba(34,211,238,0.16)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{f.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Featured / bento */}
            <div className="grid gap-5 lg:grid-cols-12">
              {featured.map((project, i) => (
                <SpotlightCard
                  key={project.id}
                  project={project}
                  index={i}
                  featured={i === 0}
                />
              ))}
            </div>

            {filter === 'all' && secondary.length > 0 && (
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {secondary.map((project, i) => (
                  <CompactCard key={project.id} project={project} index={i} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 text-center font-mono text-[11px] tracking-wide text-slate-500">
          {filter === 'featured' ? featured.length : projects.length}{' '}
          {locale === 'fr' ? 'projets sélectionnés' : 'selected projects'}
        </p>
      </div>
    </section>
  )
}
