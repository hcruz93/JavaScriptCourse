import { gameState } from "../gameState/index.js";

export  const getPlayersHandler =  (request, response) => {
  response.status(200).send(gameState.players) 

}