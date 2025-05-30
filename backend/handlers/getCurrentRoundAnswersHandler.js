import { gameState } from '../gameState/index.js'
import { questions } from '../questions.js'

export const getCurrentRoundAnswersHandler = (request, response) => {
  if (gameState.rounds.length === 0) {
    response.status(400).send({
      message: 'No round has been started yet'
    })
    return
  }

const currentRound = gameState.rounds[gameState.rounds.length - 1]

const matchingQuestion = questions.find((question)=>{
  return question.id === currentRound.questionId

})

if (!matchingQuestion) {
  response.status(500).send({
    message: `there was no question with ID ${currentRound.questionId}`
  })
  return
}

console.log(matchingQuestion)

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