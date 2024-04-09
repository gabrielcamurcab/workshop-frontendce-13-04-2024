import { forwardRef } from 'react';
import styles from "./question.module.css";

export const Question = forwardRef(function Question(props, ref) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.question}>{`What is ${props.question.name}'s real name?`}</span>
        <input className={styles.answer} type="text" name="answer" ref={ref} />
      </label>
    </div>
  )
})
