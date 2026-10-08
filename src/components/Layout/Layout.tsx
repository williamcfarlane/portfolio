import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

// Shared shell: navbar and footer wrap the current page, injected via <Outlet />.
function Layout() {
  return (
    <div className={styles.shell}>
      <Navbar />
      <main className={styles.content}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
