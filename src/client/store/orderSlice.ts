import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getList:any = createAsyncThunk('list', async() => {
  const res = await axios.get('http://localhost:7570/order/list')
  return res.data
})

export const getDetail:any = createAsyncThunk('detail', async(id, thunkAPI) => {
  const res = await axios.get(`http://localhost:7570/order/detail/${id}`)
  return res.data
})

export const addOrder:any = createAsyncThunk('addOrder', async(params:any, thunkAPI) => {
  const res = await axios.post(`http://localhost:7570/order/add`, {
    goods_id: params?.goods_id,
    amount: params?.amount,
  })
  return res.data
})

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    list: [],
    detail: {},
    form: {},
  },
  reducers: {
    list(state) {

    },
    detail(state, id) {

    },
  },
  extraReducers(builder) {
    builder.addCase(getList.fulfilled, (state, action) => {
      console.log(state)
      console.log(action)
      state.list = action.payload
    })
    builder.addCase(getDetail.fulfilled, (state, action) => {
      console.log(state.list)
      console.log(action.payload)
      state.detail = action.payload
    })
    builder.addCase(addOrder.fulfilled, (state, action) => {
      console.log(state.list)
      console.log(action.payload)
      state.detail = action.payload
    })
  }
})

export const { list, detail } = orderSlice.actions
export default orderSlice.reducer