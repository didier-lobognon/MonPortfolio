import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/LanguageProvider'
import { cn } from '@/lib/utils'

function FlagFR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="8" height="16" fill="#002395" />
      <rect x="8" width="8" height="16" fill="#fff" />
      <rect x="16" width="8" height="16" fill="#ED2939" />
    </svg>
  )
}

function FlagEN({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#fff" strokeWidth="3.2" />
      <path d="M0 0 L24 16 M24 0 L0 16" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M12 0 V16 M0 8 H24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0 V16 M0 8 H24" stroke="#C8102E" strokeWidth="2.6" />
    </svg>
  )
}

/** Sélecteur FR / EN avec drapeaux */
export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <div
      className={cn(
        'relative inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-sm',
        className,
      )}
      role="group"
      aria-label={t.nav.langLabel}
    >
      {(
        [
          { id: 'fr' as const, label: 'FR', Flag: FlagFR, name: 'Français' },
          { id: 'en' as const, label: 'EN', Flag: FlagEN, name: 'English' },
        ] as const
      ).map(({ id, label, Flag, name }) => {
        const active = locale === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => setLocale(id)}
            data-cursor={label}
            className={cn(
              'relative inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-semibold tracking-wide transition-colors',
              active ? 'text-text' : 'text-muted hover:text-text/80',
            )}
            aria-pressed={active}
            aria-label={name}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full border border-accent/35 bg-accent/20 shadow-[0_0_18px_rgba(59,130,246,0.22)]"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/40">
              <Flag className="h-3.5 w-[21px] block" />
            </span>
            <span className="relative">{label}</span>
          </button>
        )
      })}
    </div>
  )
}
