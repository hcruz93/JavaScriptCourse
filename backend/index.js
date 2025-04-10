import express from 'express' // ES6 module syntax
// const express = require('express')  // CommonJS syntax

const app = express()

app.get('/hello', (request, response) => {
  response.status(404).send('Hello our first app')
})

console.log('Server is running on port 3331')
app.listen(3331)