import { useRef } from "react";
import { Button } from "../button/button";
import styles from "./response.module.css";

export function Response({ question, callback }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = e.target.elements.answer.value;
    callback(response);
    resetForm();
  };

  function resetForm() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span className={styles.question}>{question}</span>
        <input className={styles.answer} type="text" name="answer" ref={inputRef} />
      </label>
      <Button type="submit">Submit Answer</Button>
    </form>
  );
}
