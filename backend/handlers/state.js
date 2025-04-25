export const stateHandler = (request, response) => {
  response.status(200).send({
    players: [],
    guesses: {},
    rounds: [],
    points: {},
  })
}