import { useState, type FormEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Sparkles,
  Clock3,
  ShieldCheck,
} from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { MagneticButton } from '@/components/shared/MagneticButton'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { fadeInUp, slideInLeft, slideInRight, viewportOnce } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const { t, locale } = useLanguage()
  const fr = locale === 'fr'
  const c = t.contact

  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const validate = (v: FormState): FormErrors => {
    const next: FormErrors = {}
    if (!v.name.trim() || v.name.trim().length < 2) next.name = c.errName
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) next.email = c.errEmail
    if (!v.message.trim() || v.message.trim().length < 10) next.message = c.errMessage
    return next
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSending(true)
    await new Promise((r) => setTimeout(r, 900))
    setSending(false)
    setSubmitted(true)
    setValues({ name: '', email: '', subject: '', message: '' })
  }

  const linkedin = personalInfo.socials.find((s) => s.id === 'linkedin')?.href ?? '#'
  const github = personalInfo.socials.find((s) => s.id === 'github')?.href ?? '#'

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="theme-ambient pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.1),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.12),transparent_50%)]" />
        <motion.div
          className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/15 blur-[110px]"
          animate={{ opacity: [0.25, 0.45, 0.25], y: [0, -16, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          description={c.description}
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.15fr] lg:gap-10">
          {/* Panneau invitation */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-7 shadow-[var(--shadow-card)] light-card sm:p-8">
              <div
                aria-hidden
                className="theme-ambient pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-accent-cyan/20 blur-3xl"
              />
              <div className="relative flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-600">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  {c.availability}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-slate-400">
                  <Clock3 className="h-3 w-3 text-accent-cyan" />
                  {c.response}
                </span>
              </div>

              <p className="relative mt-6 font-display text-xl leading-snug text-text sm:text-2xl">
                {fr
                  ? 'Un message suffit pour démarrer. Je lis tout, je réponds avec soin.'
                  : 'One message is enough to start. I read everything and reply with care.'}
              </p>

              <ul className="relative mt-6 space-y-3">
                {c.reassurance.map((line, i) => (
                  <motion.li
                    key={line}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.06 * i }}
                    className="flex items-start gap-2.5 text-sm text-slate-300"
                  >
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" />
                    {line}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3">
              <InfoCard
                icon={Mail}
                label={c.emailLabel}
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
                accent="#22D3EE"
              />
              <InfoCard
                icon={Phone}
                label={c.phoneLabel}
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                accent="#A78BFA"
              />
              <InfoCard
                icon={MapPin}
                label={c.locationLabel}
                value={personalInfo.location}
                accent="#F59E0B"
              />
            </div>

            <div className="flex gap-3">
              <SocialBtn href={linkedin} label="LinkedIn" accent="#0A66C2">
                <FaLinkedin size={18} />
              </SocialBtn>
              <SocialBtn href={github} label="GitHub" accent="#E6EDF3">
                <FaGithub size={18} />
              </SocialBtn>
              <SocialBtn
                href={`mailto:${personalInfo.email}`}
                label="Email"
                accent="#22D3EE"
              >
                <Mail size={18} />
              </SocialBtn>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-6 shadow-[var(--shadow-card)] light-card sm:p-8"
            style={{
              boxShadow: 'var(--shadow-card)',
            }}
            noValidate
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/60 to-transparent"
            />
            <div className="mb-6 flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-cyan/15 text-accent-cyan">
                <Sparkles size={18} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-text">
                  {c.formTitle}
                </h3>
                <p className="mt-0.5 text-sm text-slate-500">{c.formHint}</p>
              </div>
            </div>

            {submitted ? (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center gap-4 py-14 text-center"
              >
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400"
                >
                  <CheckCircle2 size={36} />
                </motion.span>
                <h3 className="font-display text-xl font-semibold text-text">
                  {c.sentTitle}
                </h3>
                <p className="max-w-sm text-sm leading-relaxed text-slate-400">
                  {c.sentBody}
                </p>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setSubmitted(false)}
                >
                  {c.sentAgain}
                </Button>
              </motion.div>
            ) : (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label={c.name}
                    error={errors.name}
                    active={focused === 'name'}
                  >
                    <Input
                      name="name"
                      autoComplete="name"
                      placeholder={c.namePh}
                      value={values.name}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, name: e.target.value }))
                      }
                      aria-invalid={!!errors.name}
                      className="border-white/10 bg-white/[0.03] focus-visible:border-accent-cyan/50 focus-visible:ring-accent-cyan/20"
                    />
                  </Field>
                  <Field
                    label={c.email}
                    error={errors.email}
                    active={focused === 'email'}
                  >
                    <Input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={c.emailPh}
                      value={values.email}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      onChange={(e) =>
                        setValues((v) => ({ ...v, email: e.target.value }))
                      }
                      aria-invalid={!!errors.email}
                      className="border-white/10 bg-white/[0.03] focus-visible:border-accent-cyan/50 focus-visible:ring-accent-cyan/20"
                    />
                  </Field>
                </div>

                <Field label={c.subject} active={focused === 'subject'}>
                  <Input
                    name="subject"
                    placeholder={c.subjectPh}
                    value={values.subject}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, subject: e.target.value }))
                    }
                    className="border-white/10 bg-white/[0.03] focus-visible:border-accent-cyan/50 focus-visible:ring-accent-cyan/20"
                  />
                </Field>

                <Field
                  label={c.message}
                  error={errors.message}
                  active={focused === 'message'}
                >
                  <Textarea
                    name="message"
                    placeholder={c.messagePh}
                    value={values.message}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, message: e.target.value }))
                    }
                    aria-invalid={!!errors.message}
                    className="min-h-[140px] border-white/10 bg-white/[0.03] focus-visible:border-accent-cyan/50 focus-visible:ring-accent-cyan/20"
                  />
                </Field>

                <MagneticButton className="w-full sm:w-auto">
                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    disabled={sending}
                    className="w-full gap-2 sm:w-auto"
                    data-cursor={c.send}
                  >
                    {sending ? c.sending : c.send}
                    <Send size={16} />
                  </Button>
                </MagneticButton>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  active,
  children,
}: {
  label: string
  error?: string
  active?: boolean
  children: ReactNode
}) {
  return (
    <label className="block space-y-2">
      <span
        className={cn(
          'text-sm font-medium transition-colors',
          active ? 'text-accent-cyan' : 'text-text/90',
        )}
      >
        {label}
      </span>
      {children}
      {error && <span className="block text-xs text-red-400">{error}</span>}
    </label>
  )
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string
  accent: string
}) {
  const inner = (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-elevated px-4 py-3.5 transition-colors hover:border-white/20 light-card-soft">
      <span
        className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
        style={{
          color: accent,
          background: `${accent}18`,
          boxShadow: `0 0 20px ${accent}14`,
        }}
      >
        <Icon size={18} />
      </span>
      <div className="min-w-0">
        <p className="text-[11px] tracking-wide text-slate-500 uppercase">{label}</p>
        <p className="truncate text-sm font-medium text-text">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block" data-cursor={label}>
        {inner}
      </a>
    )
  }
  return inner
}

function SocialBtn({
  href,
  label,
  children,
  accent,
}: {
  href: string
  label: string
  children: ReactNode
  accent: string
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      data-cursor={label}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-elevated text-slate-300 transition-colors"
      style={{ ['--hover' as string]: accent }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = accent
        e.currentTarget.style.borderColor = `${accent}66`
        e.currentTarget.style.boxShadow = `0 0 24px ${accent}33`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = ''
        e.currentTarget.style.borderColor = ''
        e.currentTarget.style.boxShadow = ''
      }}
    >
      {children}
    </motion.a>
  )
}
