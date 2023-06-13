import { createRouter, createWebHistory } from 'vue-router'

const routes:any = [
  {
    path: '/',
    component: () => import('@/components/Dashboard'),
  },
  {
    path: '/category',
    component: () => import('@/components/category'),
  },
  {
    path: '/user',
    component: () => import('@/components/user'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router