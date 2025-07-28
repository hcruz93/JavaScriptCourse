"use client"

import { useState } from "react"
import { addPlayer } from "@/requests/addPlayer.js"

export default function Join() {

  const [playerName,setPlayerName]= useState(undefined)

  const handlePlayerNameInputChange = (event) => {
    setPlayerName(event.target.value)
  }

  const submitPlayerName = () => {
    console.log("Called submit player name", playerName)

    addPlayer(playerName).then((response) => {
      console.log("response after that addPlayer",response)
    })
  }

  return(
    <div>
      <h1>Submit your player name</h1>
      <p>
        <input type="text" onChange={handlePlayerNameInputChange}/>
      </p>
      <p>
        <button type="submit" onClick={submitPlayerName}> Join Game </button>
      </p>
    </div>
  )
}