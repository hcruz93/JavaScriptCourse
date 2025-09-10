"use client"

import { useState } from 'react';

export default function Client() {

  const [guess, setGuess] = useState(undefined)

  const handleGuess= (event) => {
    setGuess(event.target.value)
  }

  const handleSubmitGuess = () => {
    console.log("submitting guess:", guess);
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