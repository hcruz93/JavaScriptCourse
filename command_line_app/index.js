const playerOne = "Rick"
const playerTwo = "Jessica"

const gameState = {
  gameName: "Our amazing guessing game",
  copyrightYear: 2024,
  players: [],

}

/******************************FUNCTIONS********************************************/
const addPlayer = (playerName) => {
  gameState.players.push(playerName)
}

const welcomePlayer = (playerName) => {
  console.log("Hello, welcome to our game", playerName)

}

const removerLatestAddedPlayer = (params) => {
  return gameState.players.pop()
}

/**************************************************************************/
console.log("Welcome to my app")
welcomePlayer(playerOne)
welcomePlayer(playerTwo)
console.log("current players:", gameState.players)
addPlayer(playerOne)
addPlayer(playerTwo)
addPlayer("The person with the bad internet")
console.log("Player after adding:", gameState.players)
const playerThatWasRemove = removerLatestAddedPlayer()
console.log("Players after removing", gameState.players)
console.log("The player that was remove:", playerThatWasRemove)
console.log("The copyright year: ",gameState.copyrightYear)
console.log("The name of the game:", gameState.gameName)






