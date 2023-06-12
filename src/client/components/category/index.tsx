import React, { useEffect } from 'react'

import FooterNav from '@/components/FooterNav'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '@/store/categorySlice'

export default () => {
  const list = useSelector((state:any) => state.category.list)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getList())
  }, [])

  return (
    <div>
      <ul className="category_list">
        {
          list.map(item =>
            <li key={ item.id }>
              <div>{ item.name }</div>
              <nav>
                {
                  item.category2s.map(item2 => 
                    <Link to={ `/category/${item2.id}` } key={ item2.id }>{ item2.name }</Link>
                  )
                }
              </nav>
            </li>
          )
        }
      </ul>
      <FooterNav />
    </div>
  )
}