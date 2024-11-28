
console.log("Welcome to my app")

const playerOne = "Rick"
const playerTwo = "Jesicsa"


const gameState = {
  gameName: "Our amazing guessing game",
  copyrightYear: 2024,
  players: [],

}

const addPlayer = (playerName) => {
  gameState.players.push(playerName)
}


console.log("current players:", gameState.players)
addPlayer(playerOne)
addPlayer(playerTwo)
console.log("Player after adding:", gameState.players)

// Function name: welcomePlayer
// I can pass a player to this function
// Then this function should welcome the player
// There won't be any code repeated in terms od welcoming

const welcomePlayer = (playerName) => {
  console.log("Hello, welcome to our game", playerName)

}

console.log("The copyright year: ",gameState.copyrightYear)
console.log("The name of the game:", gameState.gameName)


welcomePlayer(playerOne)
welcomePlayer(playerTwo)