// ProjectCard — server component safe, hover handled by CSS (.project-card class in globals.css)
import type { Project } from '@/lib/data'

const ACCENT_COLORS = [
  'var(--blue)',
  'var(--purple)',
  'var(--green)',
  'var(--orange)',
  'var(--pink)',
]

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length]

  return (
    // .project-card provides background, border, hover — defined in globals.css
    <article
      className="project-card px-[22px] py-5"
      style={{ borderLeft: `3px solid ${accent}` }}
    >
      {/* Title + optional external link */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-mono text-[14px] font-semibold" style={{ color: 'var(--text-head)' }}>
          {project.title}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] px-2 py-0.5 rounded whitespace-nowrap flex-shrink-0 transition-all duration-150 hover:brightness-110"
            style={{
              color: 'var(--blue)',
              background: 'var(--blue-bg)',
              border: '1px solid var(--blue-border)',
            }}
          >
            {project.linkLabel ?? 'View'} ↗
          </a>
        )}
      </div>

      {/* Short description */}
      <p className="text-[13px] leading-[1.6] mb-2" style={{ color: 'var(--muted)' }}>
        {project.description}
      </p>

      {/* What I worked on */}
      <p className="text-[13px] leading-[1.6] mb-3" style={{ color: 'var(--text)' }}>
        {project.whatIDid}
      </p>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => (
          <span
            key={t}
            className="font-mono text-[11px] px-2 py-0.5 rounded"
            style={{
              background: 'var(--bg-hover)',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}
