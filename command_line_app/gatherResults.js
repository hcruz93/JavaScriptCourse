const {gameState} = require("./gameState.js")

const gatherResults =  (roundNumber) => {

  const round = gameState.rounds[roundNumber]

  if (!round) {
    throw new Error(`Theres was such round with number ${roundNumber}`)
  }

  if (round.guesses.length === 0) {
    throw new Error(`The round with number ${roundNumber} had no guesses`)
  }

  return {
    "Rick": 100,
    "Jessica": 100,
  }

}

module.exports = {
  gatherResults,
}