# Vue2


# Vue3

添加前景图
  import img from '@/assets/FE.png'
  const img = require('@/assets/FE.png')
  const img = ref(base64)
  const img = ref('@/assets/FE.png') 无效

添加背景图
  background: url('~@/assets/FE.png');

# Vue-Router
借鉴传统服务端路由

const routes = [                          定义路由数组，顺序不重要
  { path, component }                     动态引入路由组件
]
VueRouter.createRouter({                  创建路由实例
  history: VueRouter.createWebHistory({ base }),  设置history模式
  routes,
})

Vue.createApp(App).use(router)            挂载到根实例

<router-link to="">children</router-link> 创建链接
<router-view />                           显示路由匹配的组件

路由模式：
  hash      不利于SEO，不需要在服务器上做任何特殊处理
  history   利于SEO，在服务器上添加回退路由，非静态资源都匹配到index.html

Hook: 
  useRoute()  -> route
  useRouter() -> router

路径参数
/xx/:id  ->   route.params.id
查询参数
/xx?id   ->   route.query.id

  同一个组件的参数变化，组件实例被复用，组件的生命周期钩子不会被调用
  可以用watch(route.params)监听，或使用beforeRouteUpdate导航守卫

路由数组
  嵌套路由
    { children }        <router-view />
      { path: '' }      空嵌套渲染

  自定义正则表达式
    404路由: { path: '/:pathMatch(.*)*' }     ->    route.params.pathMatch
    /:id  ([^/]+)至少有一个字符不是斜杠
    
  重定向 { path, redirect }    添加beforeEnter守卫无效
  别名 { path, alias }      访问alias时，URL不变，但被匹配为path     其实没必要，徒增复杂度

  命名视图
    一个路由显示多个组件    其实没必要，徒增复杂度

  路由组件传参
    { props, template }     约等于route.params

编程式导航
  模仿window.history的一些API，是一个栈
  router.push('' | { path, query, name })  对应于router-link的to   path和params不能一起用   返回Promise
  router.replace({ path })    替换，不会向history添加新记录
  router.go(num)    横跨历史  在历史栈中前进或后退多少步

部署
  webpack.output.publicPath = Vue.createWebHistory.base
  
  客户端加载webpack
    webpack.devServer.historyFallback: { rewrites: [{ from: /./, to: /publicPath/ }] }
  
  服务端加载nginx -> location /base/ {
    try_files $uri $uri/ /index.html;
  }

导航守卫
  通过跳转或取消的方式守卫导航。应用在目标上，而非跳转路由上

  全局前置守卫: router.beforeEach((to, from) => {}) 按创建顺序调用，异步解析执行
  全局解析守卫: 
  全局后置守卫: 
  路由独享守卫: 
  组件内的守卫: 

  完整的导航解析流程: 


过渡效果

动态
参数
URL编码

滚动行为

# Vuex

