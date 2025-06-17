import Link from "next/link"

export default function Home() {
  const myName = "Rick";
  const randomNumber = Math.random(); ;

 return (
  <div>
    <h1>Guessing game</h1>
    <p>{myName}</p>
    <p>{randomNumber}</p>
    <p>{"hello"[0]}</p>
    <p>Waiting for a player</p>
    <h2>join</h2>
    <p>Navigate to <Link href="/joinb">/join</Link> on your phone to join the game</p>
  </div>
 )
}


//