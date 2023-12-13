import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  res.send('hi ')
})
app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`)
})
