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
    results[guess.player]= 100

    
  }

  return results

}

module.exports = {
  gatherResults,
}