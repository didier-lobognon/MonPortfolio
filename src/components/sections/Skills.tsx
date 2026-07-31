import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skills, skillCategories } from '@/data/skills'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { GlowCard } from '@/components/shared/GlowCard'
import { SkillIcon } from '@/components/shared/SkillIcon'
import { Progress } from '@/components/ui/progress'
import { fadeInUp, staggerFast, viewportOnce } from '@/lib/animations'
import type { SkillCategory } from '@/types'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

export function Skills() {
  const { t } = useLanguage()
  const [active, setActive] = useState<SkillCategory | 'all'>('all')

  const filtered =
    active === 'all' ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <FilterChip label="Toutes" active={active === 'all'} onClick={() => setActive('all')} />
          {skillCategories.map((cat) => (
            <FilterChip
              key={cat.key}
              label={cat.label}
              active={active === cat.key}
              onClick={() => setActive(cat.key)}
            />
          ))}
        </div>

        <motion.div
          layout
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                variants={fadeInUp}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <GlowCard className="h-full p-5">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent text-xl">
                      <SkillIcon name={skill.icon} />
                    </div>
                    <span className="text-xs font-medium tabular-nums text-muted">
                      {skill.level}%
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted mb-4 leading-relaxed">{skill.description}</p>
                  <Progress value={skill.level} />
                </GlowCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border',
        active
          ? 'bg-accent/20 border-accent/40 text-accent shadow-glow'
          : 'bg-transparent border-border text-muted hover:text-text hover:border-white/20',
      )}
    >
      {label}
    </button>
  )
}
