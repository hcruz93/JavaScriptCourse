const {gameState} = require("./gameState.js") 
const {startRound} = require("./startRound.js")
const {makeGuess} = require("./makeGuess.js")
const {addPlayer, removeLatestAddedPlayer} = require("./players.js")
const {gatherResults} = require("./gatherResults.js")
const {calculateFinalResults} = require("./calculateFinalResults.js")

const playerOne = "Rick"
const playerTwo = "Jessica"


/******************************FUNCTIONS********************************************/


const welcomePlayer = (playerName) => {
  console.log("Hello, welcome to our game", playerName)

}
/**************************************************************************/
console.log("Welcome to my app")
console.log("current players:", gameState.players)
addPlayer(playerOne)
addPlayer(playerTwo)
addPlayer("The person with the bad internet")
console.log("Player after adding:", gameState.players)
const playerThatWasRemove = removeLatestAddedPlayer()
console.log("Players after removing", gameState.players)
console.log("The player that was remove:", playerThatWasRemove)
console.log("The copyright year: ",gameState.copyrightYear)
console.log("The name of the game:", gameState.gameName)

welcomePlayer(playerOne)
welcomePlayer(playerTwo)

startRound(0)
makeGuess(0,playerOne, 1969)
makeGuess(0,playerTwo, 1978)
const firstRoundResults = gatherResults(0)
console.log(JSON.stringify(firstRoundResults, undefined, 2))

startRound(1)
makeGuess(1,playerOne, 850)
makeGuess(1,playerTwo, 300)
const secondRoundResults = gatherResults(1)
console.log(JSON.stringify(secondRoundResults, undefined, 2))

startRound(2)
makeGuess(2,playerOne, 600)
makeGuess(2,playerTwo, 800)
const thirddRoundResults = gatherResults(2)
console.log(JSON.stringify(thirddRoundResults, undefined, 2))

const finalResults = calculateFinalResults()
console.log(finalResults)