import { motion } from 'framer-motion'
import { timeline } from '@/data/timeline'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { useGsapReveal } from '@/hooks/useGsapReveal'
import { cn } from '@/lib/utils'
import type { TimelineItem } from '@/types'

const typeLabel: Record<TimelineItem['type'], string> = {
  formation: 'Formation',
  experience: 'Expérience',
  stage: 'Stage',
  freelance: 'Freelance',
}

const typeVariant: Record<TimelineItem['type'], 'default' | 'violet' | 'cyan' | 'muted'> = {
  formation: 'cyan',
  experience: 'default',
  stage: 'muted',
  freelance: 'violet',
}

export function Timeline() {
  const listRef = useGsapReveal<HTMLUListElement>()

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Parcours"
          title="Timeline"
          description="Formation, expériences, stages et missions freelance."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-violet to-accent-cyan sm:-translate-x-1/2" />

          <ul ref={listRef} className="space-y-10">
            {timeline.map((item, i) => {
              const left = i % 2 === 0
              return (
                <li
                  key={item.id}
                  data-gsap-item
                  className="relative sm:grid sm:grid-cols-2 sm:gap-10"
                >
                  <span className="absolute left-4 sm:left-1/2 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-glow z-10" />

                  <div
                    className={cn(
                      'ml-10 sm:ml-0',
                      left ? 'sm:col-start-1 sm:text-right sm:pr-8' : 'sm:col-start-2 sm:pl-8',
                    )}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass rounded-2xl p-5 sm:p-6 text-left"
                    >
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <Badge variant={typeVariant[item.type]}>{typeLabel[item.type]}</Badge>
                        <span className="text-xs text-muted">{item.period}</span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-text">
                        {item.title}
                      </h3>
                      <p className="text-sm text-accent mt-1">
                        {item.organization} · {item.location}
                      </p>
                      <p className="mt-3 text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                      {item.tags && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-muted"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
