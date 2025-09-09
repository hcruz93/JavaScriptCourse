"use client"


import { useEffect, useState } from "react"
import { startRoundWithRandomQuestion } from "@/requests/startRoundWithRandomQuestion.js"

export default function Game() {
  const [prompt, setPrompt] = useState(undefined)

  useEffect(() => {
    startRoundWithRandomQuestion()
    .then((response)=>{
      console.log("Response from starting random round", response)
      setPrompt(response.data.question.prompt)
    })
    .catch((error)=>{
      console.error("Error starting round", error)
    })
  },[])

  return(
    <div>
      <h1>Question!</h1>
      <p className="question">{prompt}</p>
    </div>
  )
}