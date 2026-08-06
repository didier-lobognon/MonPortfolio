import { motion, useReducedMotion } from 'framer-motion'
import { SiWhatsapp } from 'react-icons/si'
import { personalInfo } from '@/data/personal'
import { useLanguage } from '@/i18n/LanguageProvider'

const WHATSAPP_GREEN = '#25D366'

function whatsappHref(phone: string, message?: string) {
  const digits = phone.replace(/\D/g, '')
  const base = `https://wa.me/${digits}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

/** Bouton flottant WhatsApp — bas droite, fond flouté sous le bouton */
export function WhatsAppFloat() {
  const { locale } = useLanguage()
  const reduceMotion = useReducedMotion()

  const label = locale === 'fr' ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'
  const prefill =
    locale === 'fr'
      ? `Bonjour Didier, je viens de ton portfolio.`
      : `Hi Didier, I found you via your portfolio.`

  const href = whatsappHref(personalInfo.phone, prefill)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed bottom-3 right-3 z-[70] sm:bottom-5 sm:right-5"
    >
      {/* Zone floutée sous le bouton — contenu qui passe derrière */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-32 sm:w-32"
        style={{
          background:
            'radial-gradient(circle, rgba(5,8,22,0.55) 0%, rgba(5,8,22,0.28) 42%, transparent 72%)',
          backdropFilter: 'blur(14px) saturate(1.15)',
          WebkitBackdropFilter: 'blur(14px) saturate(1.15)',
          maskImage: 'radial-gradient(circle, #000 28%, transparent 72%)',
          WebkitMaskImage: 'radial-gradient(circle, #000 28%, transparent 72%)',
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] bg-[#050816]/35 backdrop-blur-xl sm:h-[5.5rem] sm:w-[5.5rem]"
        style={{
          boxShadow: '0 0 40px rgba(37,211,102,0.12)',
        }}
      />

      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        data-cursor="WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group pointer-events-auto relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white sm:h-[3.75rem] sm:w-[3.75rem]"
        style={{
          background: `linear-gradient(145deg, #2fe574 0%, ${WHATSAPP_GREEN} 45%, #1ebe57 100%)`,
          boxShadow:
            '0 10px 28px rgba(37,211,102,0.45), 0 0 0 1px rgba(255,255,255,0.12) inset',
        }}
      >
        {!reduceMotion && (
          <>
            <span
              aria-hidden
              className="absolute inset-0 animate-ping rounded-full opacity-25"
              style={{ background: WHATSAPP_GREEN, animationDuration: '2.4s' }}
            />
            <motion.span
              aria-hidden
              className="absolute -inset-1 rounded-full border-2 border-[#25D366]/50"
              animate={{ scale: [1, 1.35], opacity: [0.55, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            />
          </>
        )}

        <SiWhatsapp className="relative z-10 h-[1.65rem] w-[1.65rem] drop-shadow-sm sm:h-7 sm:w-7" />

        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full border border-white/10 bg-[#0b1220]/90 px-3 py-1.5 text-xs font-medium text-text opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100 sm:block">
          {label}
        </span>
      </motion.a>
    </motion.div>
  )
}
