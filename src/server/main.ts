require('dotenv').config({
  path: `.env.${ process.env.BASE_ENV }`
})

import Koa from 'koa'

import routers from './routers'

const server = new Koa()

server.use(routers.routes()).use(routers.allowedMethods())

const PORT = Number(process.env.SERVER_PORT)
server.listen(PORT, () => {
  console.log(`🚀 server started at http://localhost:${PORT}`)
})