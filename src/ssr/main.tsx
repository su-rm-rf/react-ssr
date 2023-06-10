require('dotenv').config({
  path: `.env.${ process.env.BASE_ENV }`
})

import express from 'express'

import render from './render'

const server = express()

server.use(express.static('dist'))
server.use((req, res) => {
  render(req, res)
})

const PORT = Number(process.env.SSR_PORT)
server.listen(PORT, () => {
  console.log(`🚀 ssr started at http://localhost:${PORT}`)
})