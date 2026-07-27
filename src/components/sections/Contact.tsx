import { useState, type FormEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react'
import { personalInfo } from '@/data/personal'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { MagneticButton } from '@/components/shared/MagneticButton'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { fadeInUp, slideInLeft, slideInRight, viewportOnce } from '@/lib/animations'
import { cn } from '@/lib/utils'

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

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Indiquez votre nom (2 caractères minimum).'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Adresse e-mail invalide.'
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Message trop court (10 caractères minimum).'
  }
  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSending(true)
    // Simulation d'envoi (remplacer par une API réelle)
    await new Promise((r) => setTimeout(r, 900))
    setSending(false)
    setSubmitted(true)
    setValues({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre projet"
          description="Une idée, une opportunité, une question ? Écrivez-moi — je réponds rapidement."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div className="glass rounded-3xl p-7 space-y-5">
              <InfoRow icon={Mail} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
              <InfoRow icon={Phone} label="Téléphone" value={personalInfo.phone} href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} />
              <InfoRow icon={MapPin} label="Localisation" value={personalInfo.location} />
            </div>

            <div className="flex gap-3">
              <SocialBtn
                href={personalInfo.socials.find((s) => s.id === 'linkedin')?.href ?? '#'}
                label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </SocialBtn>
              <SocialBtn
                href={personalInfo.socials.find((s) => s.id === 'github')?.href ?? '#'}
                label="GitHub"
              >
                <FaGithub size={18} />
              </SocialBtn>
              <SocialBtn href={`mailto:${personalInfo.email}`} label="Email">
                <Mail size={18} />
              </SocialBtn>
            </div>
          </motion.div>

          <motion.form
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-7 sm:p-8 space-y-5"
            noValidate
          >
            {submitted ? (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center py-12 text-center gap-3"
              >
                <CheckCircle2 className="text-emerald-400" size={40} />
                <h3 className="font-display text-xl font-semibold">Message envoyé</h3>
                <p className="text-muted text-sm max-w-sm">
                  Merci pour votre message. Je vous répondrai dès que possible.
                </p>
                <Button type="button" variant="secondary" onClick={() => setSubmitted(false)}>
                  Envoyer un autre message
                </Button>
              </motion.div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nom" error={errors.name}>
                    <Input
                      name="name"
                      autoComplete="name"
                      placeholder="Votre nom"
                      value={values.name}
                      onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                      aria-invalid={!!errors.name}
                    />
                  </Field>
                  <Field label="Email" error={errors.email}>
                    <Input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="vous@email.com"
                      value={values.email}
                      onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                      aria-invalid={!!errors.email}
                    />
                  </Field>
                </div>

                <Field label="Sujet">
                  <Input
                    name="subject"
                    placeholder="Sujet du message"
                    value={values.subject}
                    onChange={(e) => setValues((v) => ({ ...v, subject: e.target.value }))}
                  />
                </Field>

                <Field label="Message" error={errors.message}>
                  <Textarea
                    name="message"
                    placeholder="Parlez-moi de votre besoin..."
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                    aria-invalid={!!errors.message}
                  />
                </Field>

                <MagneticButton className="w-full sm:w-auto">
                  <Button type="submit" size="lg" variant="gradient" disabled={sending} className="gap-2 w-full sm:w-auto">
                    {sending ? 'Envoi...' : 'Envoyer le message'}
                    <Send size={16} />
                  </Button>
                </MagneticButton>
              </>
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
  children,
}: {
  label: string
  error?: string
  children: ReactNode
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-text/90">{label}</span>
      {children}
      {error && <span className="block text-xs text-red-400">{error}</span>}
    </label>
  )
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs text-muted">{label}</p>
        <p className="text-sm text-text">{value}</p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block hover:opacity-90 transition-opacity">
        {content}
      </a>
    )
  }
  return content
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      whileHover={{ y: -4, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-card text-muted hover:text-accent hover:border-accent/40 hover:shadow-glow transition-colors',
      )}
    >
      {children}
    </motion.a>
  )
}
