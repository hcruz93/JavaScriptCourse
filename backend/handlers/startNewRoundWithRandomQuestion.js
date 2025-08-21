import { gameState } from "../gameState/index.js"
import { v4 as uuidv4 } from 'uuid';
import { questions } from "../questions.js";

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

  if (notYetAskedQuestions.length === 0) {
    response.status(410).send(gameState)
    return
  }
  
  const randomIdx =  Math.floor(Math.random() * notYetAskedQuestions.length)

  const newRound = {
    id: uuidv4(),
    // TODO: Bring back
    // questionId: notYetAskedQuestions[randomIdx].id
    questionId: questions[0].id
  }
  
  gameState.rounds.push(newRound)
  return response.status(200).send({
    round: newRound,
    // TODO: Bring back
    // question: notYetAskedQuestions[randomIdx]
    question: questions[0]
  })
}