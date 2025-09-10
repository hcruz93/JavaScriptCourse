"use client"

import { useState } from 'react';
import { makeGuess } from '@/requests/makeGuess';

export default function Client() {

  const [guess, setGuess] = useState(undefined)

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
    //TODO: populate with real player namr
    makeGuess("hardcoded_player_name", guessAsNumber)
    .then((response) => {
      console.log("response for submitting", response);
    })
    .catch((error) => {
      console.log("Errot submitting",error);
    })
  }

  return (

    <div>
      <h1>Make a guess</h1>
      <p>
        <input type="text" onChange={handleGuess}/>
      </p>
      <p>
        <button onClickCapture={handleSubmitGuess}>Submit guess</button>
      </p>
    </div>
  )
}