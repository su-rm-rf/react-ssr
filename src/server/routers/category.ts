import Router from 'koa-router'

const router = new Router()

router.get('/list', async(ctx) => {
  ctx.body = 'category list'
})

export default router