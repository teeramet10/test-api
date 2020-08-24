const express = require('express')
const app = express()
const API_PORT = process.env.PORT || 3002

const routes = require('./routes')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(routes.test)

app.listen(API_PORT)