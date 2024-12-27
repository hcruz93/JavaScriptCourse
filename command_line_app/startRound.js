const { gameState } = require("./gameState")
const {questions} = require("./questions")

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

module.exports = {
  startRound,
}