import { useEffect, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Database,
  ImageIcon,
  LayoutDashboard,
  Server,
  Shield,
  Smartphone,
  X,
} from 'lucide-react'
import type { Project } from '@/types'
import { getLenisInstance } from '@/lib/lenis'
import { useLanguage } from '@/i18n/LanguageProvider'

const FEATURE_ICONS = [Smartphone, Smartphone, LayoutDashboard, LayoutDashboard, LayoutDashboard, Shield]

interface ProjectCaseStudyProps {
  project: Project | null
  open: boolean
  onClose: () => void
}

export function ProjectCaseStudy({ project, open, onClose }: ProjectCaseStudyProps) {
  const { locale } = useLanguage()
  const fr = locale === 'fr'
  const accent = project?.accent ?? '#12B76A'

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const lenis = getLenisInstance()
    lenis?.stop()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      lenis?.start()
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
        >
          <motion.button
            type="button"
            aria-label={fr ? 'Fermer' : 'Close'}
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0, y: 48, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className="relative z-10 flex h-[92vh] max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-[1.75rem] border border-white/15 bg-[#152033] shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:rounded-[1.75rem]"
            style={{ boxShadow: `0 0 0 1px ${accent}33, 0 40px 120px rgba(0,0,0,0.45)` }}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-[#1a2740]/95 px-5 py-3.5 backdrop-blur-xl sm:px-7">
              <div className="min-w-0">
                <p className="truncate font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase">
                  {fr ? 'Étude de cas' : 'Case study'}
                </p>
                <p className="truncate text-sm font-medium text-white">{project.title}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                data-cursor={fr ? 'Fermer' : 'Close'}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-200 transition-colors hover:bg-white/15 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#152033]"
              data-lenis-prevent
              onWheel={(e) => e.stopPropagation()}
            >              {/* Hero */}
              <section className="relative overflow-hidden">
                <div className="relative aspect-[16/9] sm:aspect-[21/8]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 25%, #152033 100%), linear-gradient(90deg, ${accent}28, transparent 50%)`,
                    }}
                  />
                </div>

                <div className="relative -mt-12 px-5 pb-2 sm:-mt-14 sm:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                    className="rounded-3xl border border-white/15 bg-[#1c2a42] p-5 shadow-xl sm:p-7"
                    style={{ boxShadow: `inset 0 1px 0 ${accent}44` }}
                  >
                    <p
                      className="mb-3 font-medium text-[11px] tracking-[0.2em] uppercase"
                      style={{ color: accent }}
                    >
                      {fr ? 'Le projet' : 'The project'}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {project.category && (
                        <span
                          className="rounded-full border px-3 py-1 text-[11px] font-medium"
                          style={{
                            color: accent,
                            borderColor: `${accent}66`,
                            background: `${accent}22`,
                          }}
                        >
                          {project.category}
                        </span>
                      )}
                      <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
                        {project.period ?? project.year}
                      </span>
                      {project.role && (
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-slate-200">
                          {project.role}
                        </span>
                      )}
                    </div>

                    <h2
                      id="case-study-title"
                      className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
                    >
                      {project.title}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                      {project.longDescription}
                    </p>
                    {project.overview?.map((p) => (
                      <p
                        key={p.slice(0, 40)}
                        className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
                      >
                        {p}
                      </p>
                    ))}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-white/15 bg-[#121c2e] px-2.5 py-1 font-mono text-[11px] text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>

              <div className="space-y-12 px-5 py-10 sm:px-8 sm:py-12">
                {(project.contributions?.length ||
                  project.contributionNote ||
                  project.contributionHighlights?.length) && (
                  <section>
                    <SectionLabel accent={accent}>
                      {fr ? 'Ma contribution' : 'My contribution'}
                    </SectionLabel>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                      {fr ? 'Ce que j’ai fait sur ce projet' : 'What I did on this project'}
                    </h3>
                    {project.contributionNote && (
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
                        {project.contributionNote}
                      </p>
                    )}

                    {project.contributionHighlights &&
                      project.contributionHighlights.length > 0 && (
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {project.contributionHighlights.map((card, i) => (
                            <motion.div
                              key={card.title}
                              initial={{ opacity: 0, y: 14 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.06 }}
                              className="rounded-2xl border p-5"
                              style={{
                                borderColor: `${accent}55`,
                                background: `linear-gradient(160deg, ${accent}28, #1c2a42 70%)`,
                              }}
                            >
                              <p
                                className="font-mono text-[10px] tracking-[0.18em] uppercase"
                                style={{ color: accent }}
                              >
                                {fr ? 'Mon apport' : 'My impact'}
                              </p>
                              <h4 className="mt-2 font-display text-base font-semibold text-white sm:text-lg">
                                {card.title}
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                {card.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      )}

                    {project.contributions?.[0] && (
                      <ul className="mt-6 max-w-3xl space-y-2.5 rounded-2xl border border-white/12 bg-[#1c2a42] p-5">
                        {project.contributions[0].items.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm text-slate-300">
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0"
                              style={{ color: accent }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                )}

                {/* Modules */}
                {project.features && project.features.length > 0 && (
                  <section>
                    <SectionLabel accent={accent}>
                      {fr ? 'Le système' : 'The system'}
                    </SectionLabel>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                      {fr ? 'Modules de la plateforme' : 'Platform modules'}
                    </h3>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {project.features.map((feature, i) => {
                        const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length] ?? ArrowUpRight
                        return (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            whileHover={{ y: -4 }}
                            className="rounded-2xl border border-white/12 bg-[#1c2a42] p-4"
                          >
                            <div
                              className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
                              style={{ color: accent, background: `${accent}20` }}
                            >
                              <Icon className="h-4 w-4" />
                            </div>
                            <h4 className="font-display text-sm font-semibold text-white">
                              {feature.title}
                            </h4>
                            <p className="mt-1.5 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                              {feature.description}
                            </p>
                          </motion.div>
                        )
                      })}
                    </div>
                  </section>
                )}

                {/* Architecture */}
                {project.architecture && project.architecture.length > 0 && (
                  <section>
                    <SectionLabel accent={accent}>{fr ? 'Architecture' : 'Architecture'}</SectionLabel>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                      {fr ? 'Flux microservices' : 'Microservices flow'}
                    </h3>
                    <div className="relative mt-8">
                      <div
                        className="absolute top-3 bottom-3 left-[15px] w-px sm:left-[19px]"
                        style={{ background: `linear-gradient(180deg, ${accent}, ${accent}33)` }}
                        aria-hidden
                      />
                      {project.architecture.map((step, i) => (
                        <motion.div
                          key={step.title}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ delay: i * 0.06, duration: 0.4 }}
                          className="relative flex gap-4 pb-7 last:pb-0 sm:gap-5"
                        >
                          <div
                            className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border sm:h-10 sm:w-10"
                            style={{
                              borderColor: `${accent}66`,
                              background: `${accent}25`,
                              color: accent,
                            }}
                          >
                            {i === 0 ? (
                              <Boxes className="h-3.5 w-3.5" />
                            ) : i === project.architecture!.length - 1 ? (
                              <Database className="h-3.5 w-3.5" />
                            ) : (
                              <Server className="h-3.5 w-3.5" />
                            )}
                          </div>
                          <div className="rounded-2xl border border-white/12 bg-[#1c2a42] px-4 py-3 sm:px-5">
                            <p className="font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                              {String(i + 1).padStart(2, '0')}
                            </p>
                            <h4 className="mt-1 font-display text-sm font-semibold text-white sm:text-base">
                              {step.title}
                            </h4>
                            <p className="mt-1 text-xs text-slate-400 sm:text-sm">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Tech */}
                {project.techStack && project.techStack.length > 0 && (
                  <section>
                    <SectionLabel accent={accent}>
                      {fr ? 'Stack technique' : 'Tech stack'}
                    </SectionLabel>
                    <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                      {fr ? 'Outils de production' : 'Production tools'}
                    </h3>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {project.techStack.map((group, i) => (
                        <motion.div
                          key={group.label}
                          initial={{ opacity: 0, scale: 0.96 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04 }}
                          className="rounded-2xl border border-white/12 bg-[#1c2a42] p-4"
                        >
                          <p
                            className="text-[11px] font-semibold tracking-wide uppercase"
                            style={{ color: accent }}
                          >
                            {group.label}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {group.items.map((item) => (
                              <span
                                key={item}
                                className="rounded-md border border-white/12 bg-[#121c2e] px-2 py-1 text-[11px] text-slate-200"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Gallery */}
                <section>
                  <SectionLabel accent={accent}>{fr ? 'Galerie' : 'Gallery'}</SectionLabel>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                    {fr ? 'Aperçus produit' : 'Product previews'}
                  </h3>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {(project.gallery?.length ? project.gallery : [project.image]).map((src, i) => (
                      <motion.div
                        key={`${src}-${i}`}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-2xl border border-white/12"
                      >
                        <img
                          src={src}
                          alt={`${project.title} — ${i + 1}`}
                          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </motion.div>
                    ))}
                    {[1, 2].map((n) => (
                      <div
                        key={`ph-${n}`}
                        className="flex aspect-[16/10] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-[#1c2a42]"
                      >
                        <ImageIcon className="h-6 w-6 text-slate-500" />
                        <p className="text-xs text-slate-500">
                          {fr ? `Capture à venir 0${n}` : `Coming soon 0${n}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SectionLabel({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <p className="font-medium text-xs tracking-[0.22em] uppercase" style={{ color: accent }}>
      {children}
    </p>
  )
}
