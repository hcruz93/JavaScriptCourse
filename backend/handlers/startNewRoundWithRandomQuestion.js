import { gameState } from "../gameState/index.js"
import { v4 as uuidv4 } from 'uuid';
import { questions } from "../questions.js";

export const startNewRoundWithRandomQuestion = (request, response) => {
  
  const newRound = {
    id: uuidv4(),
    questionId: questions[1].id
  }
  
  gameState.rounds.push(newRound)
  return response.status(200).send({
    round: newRound,
    question: questions[1]
  })
}