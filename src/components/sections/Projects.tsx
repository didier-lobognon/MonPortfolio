import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { fadeInUp, staggerContainer, viewportOnce } from '@/lib/animations'
import type { Project } from '@/types'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Media */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay animé type "vidéo" au hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accent-violet/30 to-accent-cyan/20"
          initial={false}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
            backgroundSize: '200% 100%',
            animation: hovered ? 'gradient-shift 1.8s ease infinite' : undefined,
          }}
        />

        <div className="absolute top-4 left-4">
          <Badge variant="muted">{project.year}</Badge>
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-text mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant={index % 3 === 0 ? 'default' : index % 3 === 1 ? 'violet' : 'cyan'}>
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-4 py-2 text-sm text-text hover:border-accent/40 hover:bg-accent/10 transition-colors"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent/15 border border-accent/30 px-4 py-2 text-sm text-accent hover:bg-accent/25 transition-colors"
            >
              <ExternalLink size={16} />
              Démo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projets"
          title="Sélection de réalisations"
          description="Des produits concrets — du SaaS au e-commerce, en passant par les APIs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
