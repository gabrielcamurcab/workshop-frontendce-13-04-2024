"use client";

import { useEffect, useRef, useState } from "react";
import { Footer } from "./components/footer/footer";
import { Question } from "./components/question/question";
import { Info } from "./components/info/info";
import { isEqual } from "./utils/is-equal";
import styles from "./page.module.css";

const initialQuestions = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
];

export default function Page() {
  const inputRef = useRef();
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(initialQuestions);
  const [question, setQuestion] = useState({});
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (questions.length > 0) {
      setQuestion(questions.slice(-1)[0]);
    } else {
      setGameOver(true);
    }
  }, [questions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = e.target.elements.answer.value;
    const answer = question.realName;
    const isCorrect = isEqual(response, answer);
    if (isCorrect) {
      setResult("Correct!");
      setScore(score + 1);
    } else {
      setResult(`Wrong! The correct answer was ${answer}`);
    }
    setQuestions(questions.slice(0, -1));
    resetForm();
  };

  function resetForm() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  if (!gameOver) {
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <Question question={question} ref={inputRef} />
        <Footer result={result} />
      </form>
    );
  }

  return <Info />;
}
