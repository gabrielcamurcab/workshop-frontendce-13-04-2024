"use client";

import { useEffect, useState } from "react";
import { Response } from "../response/response";
import { Result } from "../result";
import { Info } from "../info";
import { check } from "../../utils/check";

export function Game({ initialQuestions = [] }) {
  const [questions, setQuestions] = useState(initialQuestions);
  const [question, setQuestion] = useState({})
  const [result, setResult] = useState('')
  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    ask()
  }, [])

  const handleSubmit = (response) => {
    const answer = question.realName
    const isCorrect = check(response, answer)
    if (isCorrect) {
      setResult('Correct!')
    } else {
      setResult(`Wrong! The correct answer was ${answer}`)
    }
    ask()
  }

  const ask = () => {
    if (questions.length > 0) {
      setQuestion(questions.slice(-1)[0])
      setQuestions(questions.slice(0, -1))
    } else {
      setGameOver(true)
    }
  }

  return (
    <>
      {!gameOver && <Response question={`What is ${question.name}'s real name?`} callback={handleSubmit} />}
      <Result message={result} />
      {gameOver && <Info>Game Over, you scored 0 points</Info>}
    </>
  );
}
