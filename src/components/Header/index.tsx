import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>Template</h2>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}