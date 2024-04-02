"use client";

import { useState } from 'react'
import { Game } from './components/game/game'
import { Button } from './components/button/button'
import { Score } from "./components/score";
import styles from './page.module.css'

const questions = [
  { name: "Superman", realName: "Clark Kent" },
  { name: "Wonder Woman", realName: "Diana Prince" },
  { name: "Batman", realName: "Bruce Wayne" },
]

export default function Page() {
  const [isStarted, setIsStarted] = useState(false)

  const handleStart = () => {
    setIsStarted(true)
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Quiz Ninja!</h1>
      </header>
      <Score />
      {isStarted ? <Game initialQuestions={questions} /> : <Button onClick={handleStart}>Click to start</Button>}
    </div>
  );
}
