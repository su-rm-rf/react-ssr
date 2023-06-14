import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getDetail } from '@/store/categorySlice'
import { useParams } from 'react-router'

export default () => {
  const detail = useSelector((state:any) => state.category.detail)
  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    dispatch(getDetail(id))
  }, [])
  
  return (
    <div>
      <ul>
        <li>{ detail.id }</li>
        <li>{ detail.name }</li>
        <li>{ detail.price }元</li>
        <li>{ detail.category_id }</li>
      </ul>
      <button></button>
    </div>
  )
}