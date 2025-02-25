const {gameState} = require("./gameState.js") 
const {startRound} = require("./startRound.js")
const {makeGuess} = require("./makeGuess.js")
const {addPlayer, removeLatestAddedPlayer} = require("./players.js")
const {gatherResults} = require("./gatherResults.js")
const {calculateFinalResults} = require("./calculateFinalResults.js")
const prompts = require("prompts")

const gatherPlayerGuess = async (playerName) => {
  const promptInput = await prompts ({
    type: 'number',
    name: 'guess',
    message: `What is your guess, ${playerName}?`,

  })
  return promptInput.guess
}


const main = async () => {
  console.log("Welcome to my app")
  const response = await prompts (
    [
      {
        type: 'text',
        name: 'playerOne',
        message: 'What is your name, player one?',
      },
      {
        type: 'text',
        name: 'playerTwo',
        message: 'What is your name, player two?',
      },
  
    ]
  )

  const playerOne = response.playerOne
  const playerTwo = response.playerTwo


  /******************************FUNCTIONS********************************************/


  const welcomePlayer = (playerName) => {
    console.log("Hello, welcome to our game", playerName)

  }
  /**************************************************************************/

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
  const playerOneRoundZeroGuess = await gatherPlayerGuess(playerOne)
  const playerTwoRoundZeroGuess = await gatherPlayerGuess(playerTwo)
  makeGuess(0,playerOne, playerOneRoundZeroGuess)
  makeGuess(0,playerTwo, playerTwoRoundZeroGuess)
  const firstRoundResults = gatherResults(0)
  console.log("Round results", JSON.stringify(firstRoundResults, undefined, 2))

  startRound(1)
  const playerOneRoundOneGuess = await gatherPlayerGuess(playerOne)
  const playerTwoRoundOneGuess = await gatherPlayerGuess(playerTwo)
  makeGuess(1,playerOne, playerOneRoundOneGuess)
  makeGuess(1,playerTwo, playerTwoRoundOneGuess)
  const secondRoundResults = gatherResults(1)
  console.log("Round results", JSON.stringify(secondRoundResults, undefined, 2))

  startRound(2)
  const playerOneRoundTwoGuess = await gatherPlayerGuess(playerOne)
  const playerTwoRoundTwoGuess = await gatherPlayerGuess(playerTwo)
  makeGuess(2,playerOne, playerOneRoundTwoGuess)
  makeGuess(2,playerTwo, playerTwoRoundTwoGuess)
  const thirddRoundResults = gatherResults(2)
  console.log("Round results", JSON.stringify(thirddRoundResults, undefined, 2))

  const finalResults = calculateFinalResults()
  console.log("\nFinal results", finalResults)

}


main ()