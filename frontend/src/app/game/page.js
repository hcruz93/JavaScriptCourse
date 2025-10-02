"use client"


import { useEffect, useState } from "react"
import { startRoundWithRandomQuestion } from "@/requests/startRoundWithRandomQuestion.js"

export default function Game() {
  const [prompt, setPrompt] = useState(undefined)
  //TODO: Change to 30 seconds when finalising
  const [timeLeft, setTimeLeft] = useState(3)

  useEffect(() => {
    startRoundWithRandomQuestion()
    .then((response)=>{
      console.log("Response from starting random round", response)
      setPrompt(response.data.question.prompt)
    })
    .catch((error)=>{
      console.error("Error starting random round", error)
    })
  },[])

  useEffect(() => {
    if (timeLeft <= 0) {
      return 
    }

    const interval = setInterval(() => {
      setTimeLeft(timeLeft-1)
    },1000)

    // Cleanup interval
    return () => {
      clearInterval(interval)
    }
  }, [timeLeft])

  return(
    <div>
      <h1>Question!</h1>
      <p className="question">{prompt}</p>
      { timeLeft <= 0 ? null : <p>Make guess in your phone! Time left: {timeLeft}</p> }
    </div>
  )
}