import type { Project } from '../../data/projects'
import StatusBadge from '../StatusBadge/StatusBadge'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.index}>{String(index + 1).padStart(2, '0')}</div>

      <div className={styles.body}>
        <div className={styles.head}>
          <h3 className={styles.title}>{project.title}</h3>
          <StatusBadge status={project.status} />
        </div>

        <p className={styles.description}>{project.description}</p>

        <ul className={styles.stack}>
          {project.techStack.map((tech) => (
            <li key={tech} className={styles.chip}>
              {tech}
            </li>
          ))}
        </ul>

        {(project.repoUrl || project.liveUrl) && (
          <div className={styles.links}>
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                Source ↗
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
