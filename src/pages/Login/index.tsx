import styles from './styles.module.css'
import { LoginForm } from './LoginForm'

export function Login() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <LoginForm />
    </div>
  )
}
