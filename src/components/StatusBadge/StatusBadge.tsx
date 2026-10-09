import type { Project } from '../../data/projects'
import styles from './StatusBadge.module.css'

interface StatusBadgeProps {
  status: Project['status']
}

const STATUS_META: Record<Project['status'], { label: string; cls: string }> = {
  'in-progress': { label: 'In progress', cls: styles.progress },
  completed: { label: 'Completed', cls: styles.completed },
  archived: { label: 'Archived', cls: styles.archived },
}

function StatusBadge({ status }: StatusBadgeProps) {
  const meta = STATUS_META[status]
  return (
    <span className={`${styles.badge} ${meta.cls}`}>
      <span className={styles.dot} aria-hidden="true" />
      {meta.label}
    </span>
  )
}

export default StatusBadge
