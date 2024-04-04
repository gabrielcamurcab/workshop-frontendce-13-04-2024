import styles from './button.module.css';

export function Button({ children, ...props }) {
  return <button className={`${styles.button} ${styles['button--block']}`} {...props}>{children}</button>
}
