import express from 'express' // ES6 module syntax
// const express = require('express')  // CommonJS syntax
import { helloHandler } from './handlers/hello.js'
import { stateHandler } from './handlers/state.js'
import { getPlayersHandler } from './handlers/getPlayers.js'

const app = express()

app.get('/hello', helloHandler )
app.get('/state', stateHandler ) // /state endpoint to get the game state
app.get('/players', getPlayersHandler ) 

// Respond with 200

console.log('Server is running on port 3331')
app.listen(3331)