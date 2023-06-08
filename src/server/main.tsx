import 'dotenv/config'

import express from 'express'

import render from './render'

const server = express()

server.use(express.static('dist'))
server.use((req, res) => {
  render(req, res)
})

const PORT = Number(process.env.PORT)
server.listen(PORT, () => {
  console.log(`🚀 server started at http://localhost:${PORT}`)
})