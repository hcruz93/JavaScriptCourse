"use client"

import { useState, useEffect } from "react"
import { addPlayer } from "@/requests/addPlayer.js"
import { getCurrentRound } from "@/requests/getCurrentRound.js"
import * as cookieCutter from "cookie-cutter"
import { useRouter } from "next/navigation"

export default function Join() {
  const router = useRouter()

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
      // set cookie
      cookieCutter.set("playerName", playerName)
    }).catch((error)=>{
      console.error("Error after add Player", error)
      setAddPlayerSuccess(false)
    })
  }

  useEffect(() => {
    setInterval(() => {
      getCurrentRound()
      .then((response) => {
        console.log("response from current round", response);
        router.push("/client")
      })
      .catch((error) => {
        console.error("error from getting round", error)
      })
    },1000)
  },[])

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