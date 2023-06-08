import React, { Suspense } from 'react'
import { Route, Routes, useRoutes } from 'react-router'
import { NavLink, Outlet } from 'react-router-dom'

import routes from '@/routers'

import '@/styles'

export default () => {
  return (
    <div>
      <div className="main_body">
        {/* <Suspense fallback={ <div>loading...</div> }>
          { useRoutes(routes) }
        </Suspense> */}
        <Routes>
          {
            routes.map(({ path, element }) => (
              <Route key={ path } path={ path } Component={ element } />
            ))
          }
        </Routes>
      </div>
    </div>
  )
}