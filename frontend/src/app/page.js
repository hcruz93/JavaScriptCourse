"use client"

import Link from "next/link"
import { getPlayers } from "../requests/getPlayers"
import { useState, useEffect } from "react"

export default function Home() {
  const [players, setPlayers] = useState([])

  useEffect((params) => {
    getPlayers().then( (response) => {
      console.warn("Response from backend", response.data)
      setPlayers(response.data)
    })
  }, [])
  
 return (
  <div>
    <h1>Guessing game</h1>
    <p>Waiting for a player</p>
    {
      players.map((player) => {
        return (
          <p>{player.name}</p>
        )
      })
    }
    <h2>join</h2>
    <p>Navigate to <Link href="/joinb">/join</Link> on your phone to join the game</p>
  </div>
 )
}


//