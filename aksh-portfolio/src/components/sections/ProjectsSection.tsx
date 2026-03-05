// Projects — passes index to ProjectCard for color rotation
import { PROJECTS } from '@/lib/data'
import ProjectCard from '@/components/ui/ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-pad" style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="max-w-content mx-auto px-6">
        <p className="section-label" style={{ ['--label-color' as string]: 'var(--orange)' }}>
          Projects
        </p>
        <div className="flex flex-col gap-2.5">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
