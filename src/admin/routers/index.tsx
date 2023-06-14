import { createRouter, createWebHistory } from 'vue-router'

const routes:any = [
  {
    path: '/',
    component: () => import('@/components/common/Dashboard'),
  },
  {
    path: '/category',
    component: () => import('@/components/category'),
  },
  {
    path: '/category/:id',
    component: () => import('@/components/category/detail'),
  },
  {
    path: '/user',
    component: () => import('@/components/user'),
  },
  {
    path: '/signin',
    component: () => import('@/components/common/Signin'),
  },
]

const router = createRouter({
  history: createWebHistory('/admin/'),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.warn(to, from)
  const isAuthenticated = !!localStorage.token
  if (!isAuthenticated && to.path !== '/signin') {
    next({ path: '/signin' })
  } else {
    next()
  }
})

export default router