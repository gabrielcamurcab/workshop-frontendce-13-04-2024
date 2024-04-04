import { Button } from "../../button/button";
import { Result } from "../result/result";
import styles from "./footer.module.css";

export function Footer({ result }) {
  return (
    <div className={styles.footer + ' ' + (result && styles['footer--result'])}>
      <div className={styles.container}>
        {result && <Result message={result} />}
        <Button type="submit">Submit Answer</Button>
      </div>
    </div>
  )
}
