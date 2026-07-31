import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'
import { useLanguage } from '@/i18n/LanguageProvider'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5 text-muted text-base sm:text-lg leading-relaxed"
          >
            {t.about.bio.map((paragraph) => (
              <motion.p key={paragraph.slice(0, 28)} variants={fadeInUp}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="glass rounded-3xl p-7 sm:p-8 gradient-border"
          >
            <h3 className="font-display text-lg font-semibold text-text mb-5">
              {t.about.interestsTitle}
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {personalInfo.interests.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2 rounded-xl bg-white/[0.03] border border-border px-3 py-2.5 text-sm text-text/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent to-accent-violet" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
