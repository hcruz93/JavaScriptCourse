import Link from "next/link"

export default function Home() {
 return (
  <div>
    <h1>Guessing game</h1>
    <p>Waiting for a player</p>
    <h2>join</h2>
    <p>Navigate to <Link href="/join">/join</Link> on your phone to join the game</p>
  </div>
 )
}
