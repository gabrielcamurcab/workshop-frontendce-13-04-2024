import styles from './result.module.css'

export function Result({ message }) {
  return <div className={styles.result}>{message}</div>
}
