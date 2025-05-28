import { gameState } from '../gameState/index.js'

export const getCurrentRoundAnswersHandler = (request, response) => {
  if (gameState.rounds.length === 0) {
    response.status(400).send({
      message: 'No round has been started yet'
    })
    return
  }

  response.status(200).send({
    results: [
      {
        player: 'Rick',
        guess: 1979,
        difference: 2, //1977
        points: 5,
      }
    ],
    overallGamePoints: [
      {
        name: 'Rick',
        points: 10,
      },
      {
        name: 'Jenny',
        points: 5,
      },
    ],
  })
  return
}