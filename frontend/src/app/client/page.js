"use client"

import { useState } from 'react';
import { makeGuess } from '@/requests/makeGuess.js';
import * as cookieCutter from "cookie-cutter"

export default function Client() {
  const [guess, setGuess] = useState(undefined)
  const [submitSucces, setSubmitSucces] = useState(undefined)

  const handleGuess= (event) => {
    setGuess(event.target.value)
  }

  const handleSubmitGuess = () => {
    console.log("submitting guess:", guess);
    const guessAsNumber = parseInt(guess)
    if (isNaN(guessAsNumber)) {
      console.log("Guess was not a number");
      return
    }

    const playerName = cookieCutter.get("playerName")

    if (!playerName) {
      console.error("no cookie playerName was defined")
      return
    }

    makeGuess(playerName, guessAsNumber)
    .then((response) => {
      console.log("response for submitting", response);
      setSubmitSucces(true)
    })
    .catch((error) => {
      console.log("Errot submitting",error);
      setSubmitSucces(false)
    })
  }

  return (

    <div>
      <h1>Make a guess</h1>
      { submitSucces == true ? null :  <p>
        <input type="text" onChange={handleGuess}/>
      </p> }
      { submitSucces == true ? null : <p>
        <button onClickCapture={handleSubmitGuess}>Submit guess</button>
      </p>  }
      { submitSucces == true ? <p>Your guess was submitted succesfully
      until the round finished and we´ll reload the page for you. </p> : null}
      { submitSucces == false ? <p>An error ocurred submittig your guess</p> : null }
    </div>
  )
}