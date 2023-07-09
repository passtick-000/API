const morgan = require('morgan')
const express = require('express')
const app = express()
const port = 3000
const route = require('./route.js')

app.use(express.json());
app.use(morgan('tiny'))
app.use('/api', route)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})