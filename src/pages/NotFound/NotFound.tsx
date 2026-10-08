import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>No route matched.</h1>
      <p className={styles.message}>
        That page doesn&apos;t exist — it may have moved, or never did.
      </p>
      <Link to="/" className={styles.back}>
        ← Back to home
      </Link>
    </div>
  )
}

export default NotFound
