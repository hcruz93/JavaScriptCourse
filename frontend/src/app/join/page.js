"use client"

import { useState } from "react"
import { addPlayer } from "@/requests/addPlayer.js"

export default function Join() {

  const [playerName,setPlayerName]= useState(undefined)
  const [addPlayerSuccess, setAddPlayerSuccess] = useState(undefined)

  const handlePlayerNameInputChange = (event) => {
    setPlayerName(event.target.value)
  }

  const submitPlayerName = () => {
    console.log("Called submit player name", playerName)

    addPlayer(playerName).then((response) => {
      console.log("response after that addPlayer",response)
      setAddPlayerSuccess(true)
    }).catch((error)=>{
      console.error("Error after add Player", error)
      setAddPlayerSuccess(false)
    })
  }

  return(
    <div>
      <h1>Submit your player name</h1>
      { addPlayerSuccess === true ? null : 
        <div> 
          <p>
            <input type="text" onChange={handlePlayerNameInputChange}/>
          </p>
          <p>
            <button type="submit" onClick={submitPlayerName}> Join Game </button>
          </p> 
        </div>
      } 
      { addPlayerSuccess === true ? <p>your threw your hat into the ring! 
      The page will redirect when the game starts</p> : null}
      { addPlayerSuccess === false ? <p>An error occured. </p> : null}
      
    </div>
  )
}