import { gameState } from '../gameState/index.js'

export const getCurrentRoundHandler =  (request, response) => {
  if (gameState.rounds.length === 0) {
    response.status(400).send({
      message: 'No round has been started yet'
    })
  }

  response.status(200).send(gameState.rounds[gameState.rounds.length - 1])
  return
}