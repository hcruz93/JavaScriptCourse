import { gameState } from "../gameState/index.js";

export  const getPlayersHandler =  (request, response) => {
  gameState.players.sort((a, b) => {
    return b.points - a.points
  })
  response.status(200).send(gameState.players) 

}