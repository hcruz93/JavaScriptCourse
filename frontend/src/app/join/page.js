"use client"

const handlePlayerNameInputChange = (event) => {
  console.log("What I received", event)
}
export default function Join() {
  return(
    <div>
      <h1>Submit your player name</h1>
      <p>
        <input type="text" onChange={handlePlayerNameInputChange}/>
      </p>
    </div>
  )
}