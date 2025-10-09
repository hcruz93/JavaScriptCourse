"use client"


import { useEffect, useState } from "react"
import { startRoundWithRandomQuestion } from "@/requests/startRoundWithRandomQuestion.js"
import { getRoundAnswer } from "@/requests/getRoundAnswer.js"

export default function Game() {
  const [prompt, setPrompt] = useState(undefined)
  //TODO: Change to 30 seconds when finalising
  const [timeLeft, setTimeLeft] = useState(3)
  const [answersResponse, setanswersResponse] = useState(undefined)

  // TODO: Bring back when finalising
  // useEffect(() => {
  //   startRoundWithRandomQuestion()
  //   .then((response)=>{
  //     console.log("Response from starting random round", response)
  //     setPrompt(response.data.question.prompt)
  //   })
  //   .catch((error)=>{
  //     console.error("Error starting random round", error)
  //   })
  // },[])

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

  useEffect(() => {
    if (timeLeft > 0) {
      return 
    }

    getRoundAnswer()
    .then((response)=>{
      console.log("response from getting round answers", response)
      setanswersResponse(response.data)
    })
    .catch((error)=>{
      console.error("error from getting round answers", error)
    })
  },[timeLeft])

  const renderAnswers = () => {
    if (!answersResponse) {
      return null
    }
    if (!answersResponse.overallGamePoints) {
      return null
    }



    return(
      <div>
        <h4>the answer was: <b>{answersResponse.roundAnswer}</b></h4>
        {answersResponse.results.map((resultsObj,idx)=>{
          return (
            <p key={idx}>
              {resultsObj.player} guessed {resultsObj.guess} --
              {resultsObj.points} points ({resultsObj.difference} off)
            </p>
          )
        })}
        <p>
          <b>This brings the overall score to the following:</b>
        </p>
        {answersResponse.overallGamePoints.map((pointsObj, idx)=> {
          return (
            <p key={idx}>{pointsObj.name}: {pointsObj.points}</p>
          )
        })}
      </div>
    )
  }

  return(
    <div>
      <h1>Question!</h1>
      <p className="question">{prompt}</p>
      { timeLeft <= 0 ? null : <p>Make guess in your phone! Time left: {timeLeft}</p> }
      { timeLeft <= 0 ? renderAnswers() : null }
    </div>
  )
}