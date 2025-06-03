import { gameState } from '../gameState/index.js'
import { questions } from '../questions.js'

const getResults =  (currentRound,matchingQuestion) => {
  const results = []

  const roundGuesses = gameState.guesses[currentRound.id] || []
  roundGuesses.forEach((roundGuess) => {


    results.push({
      player: roundGuess.player,
      guess: roundGuess.guess,
      difference: Math.abs(roundGuess.guess - matchingQuestion.answer),
      points: 22,
    })
  })
  return results
}

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
    results: getResults(currentRound, matchingQuestion),
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