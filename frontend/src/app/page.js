"use client"

import Link from "next/link"
import { getPlayers } from "../requests/getPlayers"
import { useState, useEffect } from "react"
import PalmTree from "../..//public/images/palm_tree.jpg"
import Image from "next/image"

export default function Home() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const interval= setInterval(()=>{
      getPlayers().then( (response) => {
        console.warn("Response from backend", response.data)
        setPlayers(response.data)
      })
    },1000)
    //Cleanup function after destruction
    return () => {
      clearInterval(interval)
    }
  }, [])

 return (
  <div>
    <h1>Guessing game</h1>
    <Link href= "/game"><button>Start Game</button></Link>
    <p>Waiting for a player</p>
    {
      players.map((player,index) => {
        return (
          <p key={index}>{player.name}</p>
        )
      })
    }
    <h2>join</h2>
    <p>Navigate to <Link href="/join">/join</Link> on your phone to join the game</p>
    <Image src={PalmTree}/>
  </div>
 )
}


//