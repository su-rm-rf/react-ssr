import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getDetail } from '@/store/categorySlice'
import { addOrder } from '@/store/orderSlice'
import { useParams } from 'react-router'

export default () => {
  const detail = useSelector((state:any) => state.category.detail)
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(getDetail(id))
  }, [])

  const cart = () => {

  }
  const order = () => {
    dispatch(addOrder({
      goods_id: detail.id,
      amount: 2,
    }))
  }
  
  return (
    <div>
      <ul>
        <li>{ detail.id }</li>
        <li>{ detail.name }</li>
        <li>{ detail.price }元</li>
        <li>{ detail.category_id }</li>
      </ul>
      <div>
        <button>-</button>
        <input type="text" />
        <button>+</button>
      </div>
      <div>
        <button onClick={ cart }>添加到购物车</button>
        <button onClick={ order }>下单</button>
      </div>
    </div>
  )
}