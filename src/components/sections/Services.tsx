import { motion } from 'framer-motion'
import {
  Code2,
  Server,
  Layers,
  ShoppingBag,
  Globe2,
  Rocket,
  Check,
  ArrowRight,
} from 'lucide-react'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { GlowCard } from '@/components/shared/GlowCard'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageProvider'

const icons: Record<string, LucideIcon> = {
  code: Code2,
  server: Server,
  layers: Layers,
  shopping: ShoppingBag,
  globe: Globe2,
  rocket: Rocket,
}

export function Services() {
  const { t, locale } = useLanguage()
  const fr = locale === 'fr'

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="theme-ambient pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
          className="max-w-none"
          titleClassName="text-nowrap text-[clamp(1.2rem,5.4vw,1.75rem)] sm:text-4xl md:text-5xl"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = icons[service.icon] ?? Code2
            const title = fr ? service.titleFr : service.titleEn
            const description = fr ? service.descriptionFr : service.descriptionEn
            const points = fr ? service.pointsFr : service.pointsEn
            const color = service.accent

            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <GlowCard className="group h-full p-6">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    style={{
                      color,
                      background: `${color}18`,
                      boxShadow: `0 0 24px ${color}14`,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-text">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                  <ul className="mt-4 space-y-2">
                    {points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[13px] leading-snug text-slate-300"
                      >
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0"
                          style={{ color }}
                          strokeWidth={2.5}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="max-w-xl text-sm leading-relaxed text-slate-400">
            {t.services.reassurance}
          </p>
          <a
            href="#contact"
            data-cursor={t.services.cta}
            className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/35 bg-accent-cyan/10 px-5 py-2.5 text-sm font-medium text-text transition-colors hover:bg-accent-cyan/20"
          >
            {t.services.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
