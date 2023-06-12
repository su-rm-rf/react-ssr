import React, { useEffect } from 'react'

import FooterNav from '@/components/FooterNav'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '@/store/counterSlice'

export default () => {
  const count = useSelector((state:any) => state.counter.value)

  const dispatch = useDispatch()

  const doIncrement = () => {
    console.log(count)
    dispatch(increment())
    dispatch(incrementByAmount(3))
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

      <FooterNav />
    </div>
  )
}