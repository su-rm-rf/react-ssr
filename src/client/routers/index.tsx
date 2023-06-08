import React, { lazy } from 'react'

const Home = lazy(() => import('@/components/home'))

const routes:any = [
  {
    path: '/',
    // element: <Home />,
    element: lazy(() => import('@/components/home' /* webpackPrefetch: true */))
  },
  {
    path: '/category',
    element: lazy(() => import('@/components/category' /* webpackPrefetch: true */))
  },
  {
    path: '/category/:id',
    element: lazy(() => import('@/components/category/detail' /* webpackPrefetch: true */))
  },
  {
    path: '/cart',
    element: lazy(() => import('@/components/cart' /* webpackPrefetch: true */))
  },
  {
    path: '/mine',
    element: lazy(() => import('@/components/mine' /* webpackPrefetch: true */))
  },
  {
    path: '*',
    element: lazy(() => import('@/components/404' /* webpackPrefetch: true */))
  },
]

export default routes