import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { getDetail } from '@/store/categorySlice'
import { useParams } from 'react-router'

export default () => {
  const detail = useSelector((state:any) => state.category.detail)
  const dispatch = useDispatch()

  const { id } = useParams()

  console.log(detail)

  useEffect(() => {
    dispatch(getDetail(id))
  }, [])
  
  return (
    <div>
      <ul>
        {/* {
          detail.map(item => 
            <li key={ item.id }>
              <span>{ item.name }</span>
            </li>  
          )
        } */}
      </ul>
      {
        detail.name
      }
    </div>
  )
}