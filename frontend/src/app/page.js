"use client"

import Link from "next/link"
import { getPlayers } from "../requests/getPlayers"

export default function Home() {
  const players = [
  	{
      name: "Rick",
      points: 0,
    },
    {
      name: "Jenny",
      points: 0,
    },
  ]

  // doesnt work await getPlayers() because it is not async
  getPlayers().then( (response) => {
    console.warn("Response from backend", response)
  })


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