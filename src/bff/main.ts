require('dotenv').config({
  path: `.env.${ process.env.BASE_ENV }`
})

import Koa from 'koa'

import routers from './routers'

const server = new Koa()

server.use(routers.routes()).use(routers.allowedMethods())

process.env.NODE_ENV

const PORT = Number(process.env.BFF_PORT)
server.listen(PORT, () => {
  console.log(`🚀 bff started at http://localhost:${PORT}`)
})