import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '@/data/projects'
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy'
import { viewportOnce } from '@/lib/animations'
import type { Project } from '@/types'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

type FilterKey = 'all' | 'featured'

const THEME: Record<string, { accent: string; soft: string; label: string }> = {
  masafinance: { accent: '#12B76A', soft: 'rgba(18,183,106,0.22)', label: 'FinTech' },
  'couvoir-baf': { accent: '#EA580C', soft: 'rgba(234,88,12,0.22)', label: 'ERP' },
  dynexcafrica: { accent: '#3B82F6', soft: 'rgba(59,130,246,0.22)', label: 'ONG' },
  'dynexc-gp': { accent: '#F8FAFC', soft: 'rgba(248,250,252,0.18)', label: 'RH' },
  'orbit-portfolio': { accent: '#F59E0B', soft: 'rgba(245,158,11,0.22)', label: 'Studio' },
  'forge-tasks': { accent: '#38BDF8', soft: 'rgba(56,189,248,0.22)', label: 'Collab' },
}

function themeOf(id: string, project?: Project) {
  if (THEME[id]) return THEME[id]
  if (project?.accent) {
    return {
      accent: project.accent,
      soft: `${project.accent}38`,
      label: project.category?.split(/[·•]/)[0]?.trim() ?? 'Projet',
    }
  }
  return { accent: '#3B82F6', soft: 'rgba(59,130,246,0.22)', label: 'Projet' }
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project
  index: number
  onOpen: (project: Project) => void
}) {
  const theme = themeOf(project.id, project)
  const { locale } = useLanguage()
  const fr = locale === 'fr'
  const cta = project.caseStudy
    ? fr
      ? 'Case study'
      : 'Case study'
    : fr
      ? 'Voir le projet'
      : 'View project'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0b1220]/90"
      style={{
        boxShadow: `0 0 0 1px ${theme.accent}14, 0 18px 40px rgba(0,0,0,0.28)`,
      }}
    >
      {/* Media */}
      <button
        type="button"
        onClick={() => onOpen(project)}
        data-cursor={cta}
        className="relative aspect-[16/10] w-full shrink-0 overflow-hidden text-left"
      >
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 40%, #0b1220 100%), linear-gradient(135deg, ${theme.accent}35, transparent 55%)`,
          }}
        />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="rounded-md border border-white/15 bg-black/45 px-2 py-1 font-mono text-[10px] text-white/90 backdrop-blur-sm">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="rounded-md border px-2 py-1 text-[10px] font-medium backdrop-blur-sm"
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
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-md border border-white/15 bg-black/45 px-2 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" style={{ color: theme.accent }} />
            Featured
          </span>
        )}
      </button>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[10px] tracking-[0.16em] text-slate-500 uppercase">
            {project.period ?? project.year}
          </span>
          {project.role && (
            <>
              <span className="text-slate-600" aria-hidden>
                ·
              </span>
              <span className="text-[11px] text-slate-400">{project.role}</span>
            </>
          )}
        </div>

        <div>
          <h3 className="font-display text-xl font-bold tracking-tight text-text">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        {project.contributionTeaser && (
          <p className="text-[11px] leading-snug text-slate-400">
            <span className="font-medium" style={{ color: theme.accent }}>
              {fr ? 'Contribution' : 'Contribution'}
            </span>
            <span className="text-slate-600"> — </span>
            {project.contributionTeaser}
          </p>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="rounded-md px-2 py-0.5 text-[10px] text-slate-500">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          {(project.caseStudy || project.demo) && (
            <button
              type="button"
              onClick={() => {
                if (project.caseStudy) onOpen(project)
                else if (project.demo) window.open(project.demo, '_blank', 'noreferrer')
              }}
              data-cursor={cta}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-semibold text-[#050816] transition-transform hover:scale-[1.02]"
              style={{
                background: theme.accent,
                boxShadow: `0 8px 24px ${theme.accent}33`,
              }}
            >
              {cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          )}
          {!project.caseStudy && !project.demo && project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GitHub"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/12 bg-white/[0.04] py-2.5 text-xs font-semibold text-text hover:bg-white/[0.08]"
            >
              Code <FaGithub size={13} />
            </a>
          )}
          {project.github && (project.caseStudy || project.demo) && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="GitHub"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-text hover:bg-white/[0.08]"
              aria-label={`GitHub — ${project.title}`}
            >
              <FaGithub size={14} />
            </a>
          )}
          {!project.github && !project.demo && !project.caseStudy && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <ExternalLink className="h-3.5 w-3.5" />
              {fr ? 'Détails' : 'Details'}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const { t, locale } = useLanguage()
  const [filter, setFilter] = useState<FilterKey>('all')
  const [active, setActive] = useState<Project | null>(null)

  const featured = useMemo(() => projects.filter((p) => p.featured), [])
  const secondary = useMemo(() => projects.filter((p) => !p.featured), [])
  const visible = filter === 'featured' ? featured : projects

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
            'radial-gradient(ellipse 55% 40% at 15% 15%, rgba(18,183,106,0.10), transparent 55%), radial-gradient(ellipse 45% 35% at 85% 30%, rgba(34,211,238,0.10), transparent 50%), radial-gradient(ellipse 40% 40% at 50% 90%, rgba(59,130,246,0.08), transparent 55%)',
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
              const activeFilter = filter === f.key
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter}
                  data-cursor={f.label}
                  onClick={() => setFilter(f.key)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    activeFilter ? 'text-text' : 'text-muted hover:text-text/85',
                  )}
                >
                  {activeFilter && (
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
            className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {visible.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={setActive} />
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 text-center font-mono text-[11px] tracking-wide text-slate-500">
          {visible.length}{' '}
          {locale === 'fr' ? 'projets sélectionnés' : 'selected projects'}
          {filter === 'all' && secondary.length > 0
            ? ` · ${featured.length} featured`
            : null}
        </p>
      </div>

      <ProjectCaseStudy
        project={active}
        open={Boolean(active?.caseStudy)}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
