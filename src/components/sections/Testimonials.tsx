import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

const AUTO_MS = 7000

export function Testimonials() {
  const { t, locale } = useLanguage()
  const fr = locale === 'fr'
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = testimonials.length
  const current = testimonials[index]
  const prevItem = testimonials[(index - 1 + total) % total]
  const nextItem = testimonials[(index + 1) % total]

  const go = useCallback(
    (dir: -1 | 1) => setIndex((i) => (i + dir + total) % total),
    [total],
  )

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => go(1), AUTO_MS)
    return () => window.clearInterval(id)
  }, [go, paused, index])

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          className="absolute top-[10%] left-[5%] h-72 w-72 rounded-full blur-[110px]"
          style={{ background: current.accent }}
          animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-[8%] bottom-[15%] h-80 w-80 rounded-full bg-accent-violet/20 blur-[120px]"
          animate={{ opacity: [0.15, 0.3, 0.15], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050816_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        {/* Bande logos confiance */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-10"
        >
          <p className="mb-4 text-center text-[11px] font-medium tracking-[0.2em] text-slate-500 uppercase">
            {t.testimonials.trustedBy}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {testimonials.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  'relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border transition-shadow sm:h-16 sm:w-16',
                  i === index ? 'border-transparent' : 'border-white/10 opacity-70 hover:opacity-100',
                )}
                style={{
                  background: item.companyLogoBg ?? '#0b1220',
                  boxShadow:
                    i === index
                      ? `0 0 0 2px ${item.accent}, 0 0 28px ${item.accent}55`
                      : undefined,
                }}
                aria-label={item.company}
              >
                <img
                  src={item.companyLogo}
                  alt={item.company}
                  className={cn(
                    'h-full w-full',
                    item.companyLogoFit === 'cover'
                      ? 'object-cover'
                      : 'object-contain p-1.5',
                  )}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cartes latérales (desktop) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[18%] items-center lg:flex">
            <SideCard item={prevItem} side="left" fr={fr} />
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[18%] items-center justify-end lg:flex">
            <SideCard item={nextItem} side="right" fr={fr} />
          </div>

          <div className="relative mx-auto max-w-3xl lg:max-w-2xl xl:max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.id}
                initial={{ opacity: 0, y: 28, rotateX: 8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, rotateX: -6, filter: 'blur(8px)' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220]/85 p-6 shadow-2xl backdrop-blur-xl sm:p-10"
                style={{
                  boxShadow: `0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px ${current.accent}22, 0 0 60px ${current.accent}18`,
                }}
              >
                {/* Halo couleur */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full blur-3xl"
                  style={{ background: current.accent }}
                  animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.12, 1] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${current.accent}, transparent)`,
                  }}
                />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                  {/* Photo + logo */}
                  <div className="flex shrink-0 flex-col items-center gap-3 sm:items-start">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0.88, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    >
                      <span
                        aria-hidden
                        className="absolute -inset-1 rounded-full opacity-80 blur-md"
                        style={{ background: current.accent }}
                      />
                      <img
                        src={current.photo}
                        alt={current.name}
                        className="relative h-24 w-24 rounded-full object-cover ring-2 ring-white/20 sm:h-28 sm:w-28"
                      />
                      <span
                        className="absolute -right-1 -bottom-1 flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/20 shadow-lg"
                        style={{ background: current.companyLogoBg ?? '#0b1220' }}
                      >
                        <img
                          src={current.companyLogo}
                          alt={current.company}
                          className={cn(
                            'h-full w-full',
                            current.companyLogoFit === 'cover'
                              ? 'object-cover'
                              : 'object-contain p-1',
                          )}
                        />
                      </span>
                    </motion.div>

                    <div className="flex gap-0.5 sm:mt-1" style={{ color: current.accent }}>
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.08 * i }}
                        >
                          <Star size={14} fill="currentColor" />
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <Quote
                      className="mb-3 h-8 w-8 opacity-80"
                      style={{ color: current.accent }}
                      strokeWidth={1.5}
                    />
                    <blockquote className="font-display text-lg leading-relaxed text-text/95 sm:text-xl sm:leading-relaxed">
                      « {fr ? current.contentFr : current.contentEn} »
                    </blockquote>

                    <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <p className="font-display text-base font-semibold text-text">
                          {current.name}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-400">
                          {fr ? current.roleFr : current.roleEn}
                          <span className="mx-1.5 text-slate-600">·</span>
                          <span style={{ color: current.accent }}>{current.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress autoplay */}
                <div className="relative mt-8 h-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    key={`${current.id}-${paused}-${index}`}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: current.accent }}
                    initial={{ width: '0%' }}
                    animate={{ width: paused ? undefined : '100%' }}
                    transition={
                      paused
                        ? { duration: 0 }
                        : { duration: AUTO_MS / 1000, ease: 'linear' }
                    }
                  />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <motion.button
              type="button"
              onClick={() => go(-1)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0b1220]/80 text-text backdrop-blur-sm transition-colors hover:border-white/30"
              aria-label={t.testimonials.prev}
              data-cursor={t.testimonials.prev}
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIndex(i)}
                  className="group relative flex h-8 w-8 items-center justify-center"
                  aria-label={`${item.name}`}
                >
                  <span
                    className={cn(
                      'block rounded-full transition-all duration-300',
                      i === index ? 'h-2.5 w-7' : 'h-2 w-2 group-hover:scale-125',
                    )}
                    style={{
                      background: i === index ? item.accent : 'rgba(255,255,255,0.25)',
                      boxShadow: i === index ? `0 0 14px ${item.accent}` : undefined,
                    }}
                  />
                </button>
              ))}
            </div>

            <motion.button
              type="button"
              onClick={() => go(1)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0b1220]/80 text-text backdrop-blur-sm transition-colors hover:border-white/30"
              aria-label={t.testimonials.next}
              data-cursor={t.testimonials.next}
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SideCard({
  item,
  side,
  fr,
}: {
  item: (typeof testimonials)[number]
  side: 'left' | 'right'
  fr: boolean
}) {
  return (
    <motion.div
      className={cn(
        'w-full max-w-[140px] overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/7 p-3 opacity-45 blur-[1px]',
        side === 'left' ? '-translate-x-2' : 'translate-x-2',
      )}
      style={{ boxShadow: `0 0 30px ${item.accent}15` }}
      animate={{ y: [0, side === 'left' ? -6 : 6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <img
        src={item.photo}
        alt=""
        className="mb-2 h-14 w-14 rounded-full object-cover"
      />
      <p className="truncate text-xs font-medium text-text">{item.name}</p>
      <p className="truncate text-[10px] text-slate-500">
        {fr ? item.roleFr : item.roleEn}
      </p>
    </motion.div>
  )
}
