"use client";

import { useEffect, useRef, useState } from "react";
import { Footer } from "./footer/footer";
import { Question } from "./question/question";
import { Info } from "../info";
import isEqual from "../../utils/is-equal";
import styles from "./game.module.css";

export function Game({ initialQuestions = [] }) {
  const inputRef = useRef();
  const [questions, setQuestions] = useState(initialQuestions);
  const [question, setQuestion] = useState({})
  const [result, setResult] = useState('')
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    ask()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = e.target.elements.answer.value;
    const answer = question.realName
    const isCorrect = isEqual(response, answer)
    if (isCorrect) {
      setResult('Correct!')
    } else {
      setResult(`Wrong! The correct answer was ${answer}`)
    }
    ask()
    resetForm();
  }

  function resetForm() {
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  const ask = () => {
    if (questions.length > 0) {
      setQuestion(questions.slice(-1)[0])
      setQuestions(questions.slice(0, -1))
    } else {
      setGameOver(true)
    }
  }

  if (!gameOver) {
    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <Question question={question} ref={inputRef} />
        <Footer result={result} />
      </form>
    )
  }

  return (
    <Info>Game Over, you scored 0 points</Info>
  );
}
