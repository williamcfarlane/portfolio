import FadeInSection from '../../components/FadeInSection/FadeInSection'
import { profile } from '../../data/profile'
import styles from './About.module.css'

function About() {
  return (
    <section id="about" className={styles.page}>
      <h2 className="eyebrow">About</h2>

      <div className={styles.layout}>
        <div className={styles.prose}>
          {profile.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <aside>
          <h3 className={styles.skillsHeading}>technologies</h3>
          <FadeInSection>
            <dl className={styles.manifest}>
              {profile.skills.map((group) => (
                <div key={group.layer} className={styles.row}>
                  <dt className={styles.layer}>{group.layer}</dt>
                  <dd className={styles.techs}>
                    {group.items.map((tech) => (
                      <span key={tech} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeInSection>
        </aside>
      </div>
    </section>
  )
}

export default About
