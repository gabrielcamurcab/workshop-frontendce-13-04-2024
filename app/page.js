"use client";

import { useState } from 'react'
import { Game } from './components/game/game'
import { Button } from './components/button/button'

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

  if (isStarted) {
    return <Game initialQuestions={questions} />
  }

  return <Button onClick={handleStart}>Click to start</Button>
}
