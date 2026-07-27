# Didier Lobognon — Portfolio Full Stack

Portfolio personnel premium (React 19 · TypeScript · Vite · Tailwind · Framer Motion · GSAP · Lenis).

## Démarrage

```bash
npm install
npm run dev
```

Build production :

```bash
npm run build
npm run preview
```

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Framer Motion + GSAP + Lenis
- React Icons + Lucide
- Composants style Shadcn UI (Radix)

## Personnalisation

- Infos perso : `src/data/personal.ts`
- Projets : `src/data/projects.ts` (tableau JSON-like — ajoutez simplement un objet)
- Compétences : `src/data/skills.ts`
- Parcours : `src/data/timeline.ts`
- Services / Stats / Témoignages : dossiers `src/data/`

## Structure

```
src/
  components/
    layout/     # Navbar, Footer, Loader, Cursor, Lenis
    sections/   # Hero → Contact
    shared/     # GlowCard, MagneticButton, Particles...
    ui/         # Button, Card, Input (Shadcn-like)
  data/         # Contenu éditable
  hooks/        # useMagnetic, useCountUp, useGsapReveal...
  lib/          # utils + variants d'animation
```

Dark mode uniquement. Conçu pour impressionner dès le premier viewport.
