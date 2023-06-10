import Router from 'koa-router'

const router = new Router()

router.get('/', async(ctx) => {
  ctx.body = 'response from bff'
})

export default router