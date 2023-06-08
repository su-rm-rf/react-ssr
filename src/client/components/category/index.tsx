import React from 'react'

import Layout from '@/components/Layout'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '@/store/counterSlice'

export default () => {
  const count = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch()

  const doIncrement = () => {
    console.log(count)
    dispatch(increment())
  }
  const doDecrement = () => {
    console.log(count)
    dispatch(decrement())
  }

  return (
    <div>
      category
      <button onClick={ () => doIncrement() }>新增</button>
      <span>{ count }</span>
      <button onClick={ doDecrement }>减少</button>

      <Link to="/category/1">品类1</Link>
      <Layout />
    </div>
  )
}