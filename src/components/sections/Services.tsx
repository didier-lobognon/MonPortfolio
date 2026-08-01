import { motion } from 'framer-motion'
import {
  Code2,
  Server,
  Network,
  Layers,
  Wrench,
  Zap,
  Lightbulb,
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
  api: Network,
  layers: Layers,
  wrench: Wrench,
  zap: Zap,
  lightbulb: Lightbulb,
}

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
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
            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <GlowCard className="h-full p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-violet/20 text-accent">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{service.description}</p>
                </GlowCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
