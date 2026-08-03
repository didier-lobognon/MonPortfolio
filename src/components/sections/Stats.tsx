import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FolderKanban,
  Globe2,
  Code2,
  Trophy,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { impactHighlights, stats } from '@/data/stats'
import { useCountUp } from '@/hooks/useCountUp'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

const icons: Record<string, LucideIcon> = {
  folder: FolderKanban,
  globe: Globe2,
  code: Code2,
  trophy: Trophy,
}

function StatCard({
  value,
  label,
  hint,
  suffix,
  prefix,
  accent,
  icon,
  pulse,
  index,
}: {
  value: number
  label: string
  hint?: string
  suffix?: string
  prefix?: string
  accent: string
  icon: string
  pulse?: boolean
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.45 })
  const count = useCountUp(value, inView, 1600 + index * 120)
  const Icon = icons[icon] ?? Code2

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/75 p-6 backdrop-blur-sm sm:p-7"
      style={{
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04), 0 0 0 0 ${accent}00`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: accent }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}88, transparent)`,
        }}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl"
          style={{
            color: accent,
            background: `linear-gradient(135deg, ${accent}33 0%, ${accent}12 100%)`,
            boxShadow: `0 0 20px ${accent}22`,
          }}
        >
          <Icon size={20} />
        </div>
        {pulse && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium tracking-wide text-emerald-300 uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Live
          </span>
        )}
      </div>

      <p
        className="relative mt-5 font-display text-4xl font-bold tabular-nums tracking-tight sm:text-5xl"
        style={{ color: accent }}
      >
        {prefix}
        {count.toLocaleString('fr-FR')}
        {suffix}
      </p>
      <p className="relative mt-2 text-sm font-medium text-text">{label}</p>
      {hint && <p className="relative mt-1 text-xs text-slate-500">{hint}</p>}
    </motion.div>
  )
}

export function Stats() {
  const { t, locale } = useLanguage()
  const fr = locale === 'fr'
  const proofs = fr ? impactHighlights.proofsFr : impactHighlights.proofsEn

  return (
    <section id="stats" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_55%)]" />
        <motion.div
          className="absolute top-1/3 right-[8%] h-56 w-56 rounded-full bg-accent-violet/10 blur-[100px]"
          animate={{ opacity: [0.25, 0.45, 0.25], y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.stats.eyebrow}
          title={t.stats.title}
          description={t.stats.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              label={fr ? stat.labelFr : stat.labelEn}
              hint={fr ? stat.hintFr : stat.hintEn}
              suffix={stat.suffix}
              prefix={stat.prefix}
              accent={stat.accent}
              icon={stat.icon}
              pulse={stat.pulse}
              index={index}
            />
          ))}
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-white/10 bg-[#0b1220]/65 p-6 backdrop-blur-sm sm:p-7"
          >
            <div className="mb-5 flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-slate-400 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              {t.stats.proofsLabel}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {proofs.map((proof, i) => (
                <motion.li
                  key={proof.label}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                  className={cn(
                    'rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3',
                    'transition-colors hover:border-white/15 hover:bg-white/[0.05]',
                  )}
                >
                  <p className="font-display text-sm font-semibold text-text">
                    {proof.label}
                  </p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                    {proof.detail}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#12203a] to-[#0b1220] p-6 sm:p-7"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
            />
            <p className="relative text-xs font-medium tracking-[0.16em] text-slate-400 uppercase">
              {t.stats.domainsLabel}
            </p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {impactHighlights.domains.map((domain, i) => (
                <motion.span
                  key={domain}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {domain}
                </motion.span>
              ))}
            </div>
            <p className="relative mt-6 text-sm leading-relaxed text-slate-400">
              {fr
                ? 'FinTech, ERP, STEM, data, e-commerce… des contextes réels, des enjeux concrets.'
                : 'FinTech, ERP, STEM, data, e-commerce… real contexts, concrete stakes.'}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
