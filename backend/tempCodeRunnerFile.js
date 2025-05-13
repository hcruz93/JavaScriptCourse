import express from 'express' // ES6 module syntax
// const express = require('express')  // CommonJS syntax
import morgan from 'morgan' 
import { helloHandler } from './handlers/hello.js'
import { stateHandler } from './handlers/state.js'
import { getPlayersHandler } from './handlers/getPlayers.js'
import { addPlayerHandler } from './handlers/addPlayer.js'
import { startNewRoundWithRandomQuestion } from './handlers/startNewRoundWithRandomQuestion.js'

const app = express()

app.use(express.json()) // Middleware to parse JSON request body
app.use(morgan('dev'))

app.get('/hello', helloHandler )
app.get('/state', stateHandler ) // /state endpoint to get the game state
app.get('/players', getPlayersHandler ) 
app.post('/players',addPlayerHandler) // /players endpoint to add a player
app.post('/round/start/randomquestion',startNewRoundWithRandomQuestion)

// Respond with 200

console.log('Server is running on port 3331')
app.listen(3331)