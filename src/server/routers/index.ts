import Router from 'koa-router'

import category from './category'

const router = new Router()

router.get('/', async(ctx) => {
  ctx.body = 'response from server'
})

router.use('/category', category.routes(), category.allowedMethods())

export default router