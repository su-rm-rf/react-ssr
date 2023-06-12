import category from '@/components/category'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getList:any = createAsyncThunk('list', async() => {
  const res = await axios.get('http://localhost:7570/category/list')
  return res.data
})

export const getDetail:any = createAsyncThunk('detail', async(id, thunkAPI) => {
  const res = await axios.get(`http://localhost:7570/category/detail/${id}`)
  return res.data
})

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    list: [],
    detail: {},
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
  }
})

export const { list, detail } = categorySlice.actions
export default categorySlice.reducer