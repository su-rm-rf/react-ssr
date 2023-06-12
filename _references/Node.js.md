部署
监控
自动扩缩容
容灾

# Koa
获取路径参数
/xx/:id   ctx.params
/xx?id    ctx.query
{ id }    ctx.request.body

手动结束本次请求
  throw new Error() 然后在外层设定一个错误处理中间件去捕获，next().catch()
  https://segmentfault.com/q/1010000021469603

# TypeORM
第一次initialize时，自动建表

