const {gameState} = require("./gameState") 
const {startRound} = require("./startRound")
const {makeGuess} = require("./makeGuess")

const playerOne = "Rick"
const playerTwo = "Jessica"


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
welcomePlayer(playerOne)
welcomePlayer(playerTwo)
startRound(0)

// console.log(gameState)
// console.log(gameState.rounds)

makeGuess(0,playerOne, 1969)
makeGuess(0,playerTwo, 1978)

console.log(JSON.stringify(gameState, undefined, 2))
