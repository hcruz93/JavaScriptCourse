const playerOne = "Rick"
const playerTwo = "Jessica"

const gameState = {
  gameName: "Our amazing guessing game",
  copyrightYear: 2024,
  players: [],
  rounds: [],
}

const questions = [
  {
    prompt: "In what year was the first Star wars movie released?",
    answer: 1977,
  },
  {
    prompt: `At the time of release, Titanic (1997) was the most expensive 
    movie ever made. How did it cost to produce in US dollars?`,
    answer: 210000000,

  },
  {
    prompt: `How many people did Arnold Schwarzenegger kill on screen in all of
    his movies combined? (Data by alloutabubblegum.com)`,
    answer: 895,

  },
]

/******************************FUNCTIONS********************************************/

const makeGuess = (roundNumber, playerName, guess) => {
  if (!gameState.rounds[roundNumber]) {
    throw new Error("Dummy error inside makeGuess()")
  }
}

const addPlayer = (playerName) => {
  gameState.players.push(playerName)
}

const welcomePlayer = (playerName) => {
  console.log("Hello, welcome to our game", playerName)

}

const removerLatestAddedPlayer = (params) => {
  return gameState.players.pop()
}

const startRound =  (roundNumber) => {
  console.log(`\n--- Round ${roundNumber} ---`)
  console.log("And here's your question¡")
  const specificQuestion = questions[roundNumber]
  console.log(specificQuestion.prompt)

  gameState.rounds.push({
    guesses: [],
    questions: specificQuestion,
  })
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

