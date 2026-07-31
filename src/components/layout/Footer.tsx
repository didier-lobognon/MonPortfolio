import { personalInfo } from '@/data/personal'
import { scrollToSection } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageProvider'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-display text-2xl font-bold gradient-text mb-3">
              {personalInfo.name}
            </p>
            <blockquote className="max-w-md text-muted text-sm leading-relaxed italic">
              {t.footer.quote}
            </blockquote>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted">
            <button type="button" onClick={() => scrollToSection('projects')} className="hover:text-text transition-colors">
              {t.nav.projects}
            </button>
            <button type="button" onClick={() => scrollToSection('about')} className="hover:text-text transition-colors">
              {t.nav.about}
            </button>
            <button type="button" onClick={() => scrollToSection('contact')} className="hover:text-text transition-colors">
              {t.nav.contact}
            </button>
            <a href={personalInfo.socials.find((s) => s.id === 'github')?.href} target="_blank" rel="noreferrer" className="hover:text-text transition-colors">
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-border pt-6 text-xs text-muted/80">
          <p>© {year} {personalInfo.name}. {t.footer.rights}</p>
          <p>{t.footer.crafted}</p>
        </div>
      </div>
    </footer>
  )
}
