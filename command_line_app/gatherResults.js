const {gameState} = require("./gameState.js")

const gatherResults =  (roundNumber) => {

const round = gameState.rounds[roundNumber]

  if (!round) {
    throw new Error(`Theres was such round with number ${roundNumber}`)
  }

  if (round.guesses.length === 0) {
    throw new Error(`The round with number ${roundNumber} had no guesses`)
  }

  const results = {}

  for (let index = 0; index < round.guesses.length; index++) {
    const guess = round.guesses[index];
    const offFromSolution =  Math.abs(round.questions.answer - guess.guess)

    let score = 1

    if (round.questions.answer === guess.guess) {
      score = 10
    } else if (offFromSolution <= 5) {
      score = 5
    }

    results[guess.player]= score

    
  }

  return results

}

module.exports = {
  gatherResults,
}