import type { KeyboardEvent } from 'react'
import { useEffect, useRef, useState } from 'react'
import FadeInSection from '../../components/FadeInSection/FadeInSection'
import { experiences } from '../../data/experiences'
import styles from './Experience.module.css'

function Experience() {
  const [selectedId, setSelectedId] = useState(experiences[0].id)

  const selectedCompany =
    experiences.find((company) => company.id === selectedId) ?? experiences[0]

  // One DOM handle per tab button, keyed by company id, so the effect can
  // measure the active button. A ref avoids re-renders on change.
  const tabRefs = useRef<Record<number, HTMLButtonElement | null>>({})

  // Measured position + height of the sliding indicator bar.
  const [indicator, setIndicator] = useState({ top: 0, height: 0 })

  // Re-measure when the selected tab changes, and on window resize — layout
  // shifts (wrapping, breakpoints) move the buttons without touching state.
  useEffect(() => {
    const measure = () => {
      const node = tabRefs.current[selectedId]
      if (node) {
        setIndicator({ top: node.offsetTop, height: node.offsetHeight })
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [selectedId])

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = experiences.findIndex((c) => c.id === selectedId)
    const lastIndex = experiences.length - 1
    const nextIndexByKey: Record<string, number> = {
      ArrowDown: currentIndex === lastIndex ? 0 : currentIndex + 1,
      ArrowRight: currentIndex === lastIndex ? 0 : currentIndex + 1,
      ArrowUp: currentIndex === 0 ? lastIndex : currentIndex - 1,
      ArrowLeft: currentIndex === 0 ? lastIndex : currentIndex - 1,
      Home: 0,
      End: lastIndex,
    }
    const nextIndex = nextIndexByKey[event.key]
    if (nextIndex === undefined) return

    event.preventDefault()
    const nextId = experiences[nextIndex].id
    setSelectedId(nextId)
    tabRefs.current[nextId]?.focus()
  }

  return (
    <section id="experience">
      <h2 className="eyebrow">Experience</h2>

      <div className={styles.tabs}>
        <div
          className={styles.tabList}
          role="tablist"
          aria-label="Companies"
          aria-orientation="vertical"
        >
          <span
            className={styles.indicator}
            style={{
              transform: `translateY(${indicator.top}px)`,
              height: `${indicator.height}px`,
            }}
            aria-hidden="true"
          />

          {experiences.map((company) => {
            const isSelected = company.id === selectedId
            return (
              <button
                key={company.id}
                ref={(el) => {
                  tabRefs.current[company.id] = el
                }}
                id={`experience-tab-${company.id}`}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`experience-panel-${company.id}`}
                tabIndex={isSelected ? 0 : -1}
                className={
                  isSelected ? `${styles.tab} ${styles.tabActive}` : styles.tab
                }
                onClick={() => setSelectedId(company.id)}
                onKeyDown={handleTabKeyDown}
              >
                <span className={styles.tabCompany}>{company.company}</span>
              </button>
            )
          })}
        </div>

        {/* key remounts the panel on tab switch to replay the entry animation. */}
        <div
          key={selectedCompany.id}
          id={`experience-panel-${selectedCompany.id}`}
          role="tabpanel"
          aria-labelledby={`experience-tab-${selectedCompany.id}`}
          className={styles.panel}
        >
          {selectedCompany.roles.map((role) => (
            <div key={role.title} className={styles.role}>
              <h3 className={styles.roleTitle}>{role.title}</h3>
              <p className={styles.roleMeta}>{role.period}</p>
              <ul className={styles.highlights}>
                {/* FadeInSection renders a div, so it must sit INSIDE the li —
                    a ul's only valid children are li elements. */}
                {role.highlights.map((highlight, i) => (
                  <li key={i}>
                    <FadeInSection delay={`${(i + 1) * 100}ms`}>
                      {highlight}
                    </FadeInSection>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
