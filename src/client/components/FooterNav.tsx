import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <nav className="nav_footer">
      <NavLink to="/">首页</NavLink>
      <NavLink to="/category">分类</NavLink>
      <NavLink to="/cart">购物车</NavLink>
      <NavLink to="/mine">我的</NavLink>
    </nav>
  )
}