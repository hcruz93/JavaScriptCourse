"use client"

import { getPlayers } from "@/requests/getPlayers.js"
import { useEffect, useState } from "react"

export default function GameOver() {
  const [results, setResults]= useState(undefined)

  useEffect(()=>{
    getPlayers()
    .then((response)=>{
      console.log("response from getPlayers", response)
      setResults(response.data)
    })
    .catch((error)=>{
      console.error("error from getPlayers", error)
    })
  },[])

  const renderResults = () => {
    return (
      <div>
        <p><b>These are the final results:</b></p>
        {results.map((result, idx)=>{
          return(
            <p key={idx}>{result.name} -- {result.points} points</p>
          )
        })}
      </div>
    )
  }

  return (
    <div>
      <h1>Thanks for playing!</h1>
      { results ? renderResults() : <p>Loading results...</p> }
    </div>
  )
}