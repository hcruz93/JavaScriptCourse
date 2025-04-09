const express = require('express')

const app = express()

app.get('/hello', (request, response) => {
  response.status(404).send('Hello our first app')
})

app.listen(3331)