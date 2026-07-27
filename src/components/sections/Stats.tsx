import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/data/stats'
import { useCountUp } from '@/hooks/useCountUp'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'

function StatItem({
  value,
  label,
  suffix,
  prefix,
}: {
  value: number
  label: string
  suffix?: string
  prefix?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(value, inView)

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="text-center rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-sm"
    >
      <p className="font-display text-4xl sm:text-5xl font-bold gradient-text tabular-nums">
        {prefix}
        {count.toLocaleString('fr-FR')}
        {suffix}
      </p>
      <p className="mt-3 text-sm text-muted">{label}</p>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section id="stats" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 mesh-bg opacity-60 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Impact"
          title="Quelques chiffres"
          description="Des indicateurs concrets de mon parcours et de mon engagement."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <StatItem
              key={stat.id}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              prefix={stat.prefix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
