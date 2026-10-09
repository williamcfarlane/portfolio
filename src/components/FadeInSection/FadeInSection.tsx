import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import styles from './FadeInSection.module.css'

interface FadeInSectionProps {
  children: ReactNode
  delay?: string
}

function FadeInSection({ children, delay = '0ms' }: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = domRef.current
    if (!node) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      })
    })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={isVisible ? `${styles.fade} ${styles.visible}` : styles.fade}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  )
}

export default FadeInSection
