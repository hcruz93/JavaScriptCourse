import { gameState } from "../gameState/index.js"
import { v4 as uuidv4 } from 'uuid';
import { questions } from "../questions.js";

const AMOUNT_OF_ROUNDS = 3

const hasQuestionNotBeenAsked = (question) => {
  const hasBeenAsked = gameState.rounds.find((round) => {
    return question.id === round.questionId
  })

  return hasBeenAsked === undefined
}

export const startNewRoundWithRandomQuestion = (request, response) => {

  const notYetAskedQuestions = questions.filter((question) => {
    return hasQuestionNotBeenAsked(question)
  })

  if (notYetAskedQuestions.length === 0 || gameState.rounds.length >= AMOUNT_OF_ROUNDS) {
    response.status(410).send(gameState)
    return
  }
  
  const randomIdx =  Math.floor(Math.random() * notYetAskedQuestions.length)

  const newRound = {
    id: uuidv4(),
    questionId: notYetAskedQuestions[randomIdx].id
  }
  
  gameState.rounds.push(newRound)
  return response.status(200).send({
    round: newRound,
    question: notYetAskedQuestions[randomIdx]
  })
}