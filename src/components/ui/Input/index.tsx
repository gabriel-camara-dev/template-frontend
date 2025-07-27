import styles from './styles.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  type?: string
  placeholder?: string
  error?: string
}

export default function Input({ error, className, ...rest }: InputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        {...rest}
        className={`${styles.input} ${className} ${error ? styles.inputError : ''}`}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}