import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counterSlice'
import categoryReducer from './categorySlice'
import orderReducer from './orderSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    order: orderReducer,
    category: categoryReducer,
  }
})