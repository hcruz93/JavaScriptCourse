const { gameState } = require("./gameState")
const {readQuestions} = require("./questions")

const startRound = async (roundNumber) => {
  console.log(`\n--- Round ${roundNumber} ---`)
  console.log("And here's your question¡")
  const questions = await readQuestions()
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