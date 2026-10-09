import { EmailIcon, GithubIcon, LinkedinIcon } from '../icons/SocialIcons'
import { profile } from '../../data/profile'
import styles from './Navbar.module.css'

const navItems = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
]

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Email: EmailIcon,
}

function Navbar() {
  const socials = profile.links.filter((link) => link.label in socialIcons)

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark}>~/</span>
          wm
        </a>

        <div className={styles.right}>
          <ul className={styles.links}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className={styles.socials}>
            {socials.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons]
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className={styles.iconLink}
                  >
                    <Icon />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
