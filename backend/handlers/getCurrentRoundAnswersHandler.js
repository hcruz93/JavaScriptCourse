import { gameState } from '../gameState/index.js'
import { questions } from '../questions.js'


const getPoints = (difference, pointRanges) => {
  pointRanges.sort((a, b) => {
    return a.threshold - b.threshold;
  })

  console.warn(pointRanges)
  for (let index = 0; index < pointRanges.length; index++) {
    const pointRange = pointRanges[index]
    if (difference <= pointRange.threshold) {
      return pointRange.points
    }
    
  }
  return 0; // If no range matches, return 0 points
}

const getResults =  (currentRound,matchingQuestion) => {
  const results = []

  const roundGuesses = gameState.guesses[currentRound.id] || []
  roundGuesses.forEach((roundGuess) => {
    const difference = Math.abs(roundGuess.guess - matchingQuestion.answer)
    results.push({
      player: roundGuess.player,
      guess: roundGuess.guess,
      difference: difference,
      points: getPoints(difference, matchingQuestion.pointRanges),
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

  const results = getResults(currentRound, matchingQuestion)
  
  results.forEach((result) => {
    const playerGameState = gameState.players.find((player) => {
      return player.name === result.player
    })

    if (playerGameState) {
      playerGameState.points += result.points
    }
  })

  response.status(200).send({
    results: results,
    overallGamePoints: gameState.players,
  })
  return
}