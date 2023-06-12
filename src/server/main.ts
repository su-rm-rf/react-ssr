require('dotenv').config({
  path: `.env.${ process.env.BASE_ENV }`
})

import Koa from 'koa'
import Cors from 'koa2-cors'

import { AppDataSource } from './data-source'
import routers from './routers'

const server = new Koa()

server.use(Cors())
server.use(routers.routes()).use(routers.allowedMethods())

AppDataSource.initialize().then(() => {
  
}).catch(err => console.log('AppDataSource.initialize Error', err))

const PORT = Number(process.env.SERVER_PORT)
server.listen(PORT, () => {
  console.log(`🚀 server started at http://localhost:${PORT}`)
})