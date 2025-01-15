const { gameState } = require('./gameState')

const addPlayer = (playerName) => {
  gameState.players.push(playerName)
}

const removeLatestAddedPlayer = (params) => {
  return gameState.players.pop()
}

module.exports = {
  addPlayer,
  removeLatestAddedPlayer,
}