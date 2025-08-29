"use client"

import { startRoundWithRandomQuestion } from "@/requests/startRoundWithRandomQuestion.js"

export default function Game() {
  startRoundWithRandomQuestion()
  .then((response)=>{
    console.log("Response from starting random round", response)
  })
  .catch((error)=>{
    console.error("Error starting round", error)
  })

  return(
    <div>
      <h1>Question!</h1>
      <p className="question">The question will go in here.</p>
    </div>
  )
}