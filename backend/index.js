import express from 'express' // ES6 module syntax
// const express = require('express')  // CommonJS syntax
import { helloHandler } from './handlers/hello.js'

const app = express()

app.get('/hello', helloHandler )

console.log('Server is running on port 3331')
app.listen(3331)