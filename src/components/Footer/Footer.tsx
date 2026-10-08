import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.note}>
          Built with React, TypeScript &amp; Vite. {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}

export default Footer
