"use client"


import { useEffect, useState } from "react"
import { startRoundWithRandomQuestion } from "@/requests/startRoundWithRandomQuestion.js"
import { getRoundAnswer } from "@/requests/getRoundAnswer.js"
import { useRouter } from "next/navigation"
import SecretAgent from "../../../public/images/secret_agent_guessing.jpg"
import Image from "next/image"

const ROUND_LENGTH= 30
const TIME_BEFORE_NEXT_ROUND= 10000

export default function Game() {
  const router = useRouter()

  const [prompt, setPrompt] = useState(undefined)
  const [timeLeft, setTimeLeft] = useState(ROUND_LENGTH)
  const [answersResponse, setanswersResponse] = useState(undefined)

  useEffect(() => {
    startRoundWithRandomQuestion()
    .then((response)=>{
      // if response status code is 410, redirect to /gameover
      if (response.status === 410) {
        router.push("/gameover")
      }
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

  useEffect(() => {
    if (timeLeft > 0) {
      return 
    }

    getRoundAnswer()
    .then((response)=>{
      console.log("response from getting round answers", response)
      setanswersResponse(response.data)

      // REfresh the page after x seconds
      setTimeout(() => {
        window.location.reload(false)
      }, TIME_BEFORE_NEXT_ROUND);
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
      { timeLeft <= 0 ? null : <p>Make guess in your phone! Time left: {timeLeft} seconds</p> }
      { timeLeft <= 0 ? null: <Image src={SecretAgent}/>}
      { timeLeft <= 0 ? renderAnswers() : null }
      { timeLeft <= 0 ? <p>Buckle up, new question coming up sonn!</p> : null}
    </div>
  )
}