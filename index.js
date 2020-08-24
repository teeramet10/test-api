const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(routes.test)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})