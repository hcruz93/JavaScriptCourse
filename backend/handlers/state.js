import { gameState} from "../gameState/index.js";

export const stateHandler = (request, response) => {
  response.status(200).send({ gameState})
}