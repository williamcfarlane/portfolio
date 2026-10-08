import { EmailIcon } from '../../components/icons/SocialIcons'
import { profile } from '../../data/profile'
import About from '../../sections/About/About'
import Experience from '../../sections/Experience/Experience'
import Projects from '../../sections/Projects/Projects'
import styles from './Home.module.css'

function Home() {
  const email = profile.links.find((link) => link.label === 'Email')

  return (
    <div className={styles.page}>
      <section id="top" className={styles.hero}>
        <h1 className={styles.headline}>
          {profile.headline}
          <span className={styles.cursor} aria-hidden="true" />
        </h1>
        <p className={styles.intro}>{profile.intro}</p>

        <div className={styles.actions}>
          {email && (
            <a href={email.href} className={styles.contactBtn}>
              <EmailIcon />
              Contact me
            </a>
          )}
        </div>
      </section>

      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default Home
