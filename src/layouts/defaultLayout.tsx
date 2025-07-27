import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import styles from './styles.module.css'

export function DefaultLayout() {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
