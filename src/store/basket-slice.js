import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: { isVisibleBasket: false },
  reducers: {
    toggleBasket(state) {
      state.isVisibleBasket = !state.isVisibleBasket
    }
  }
})
export const basketActions = basketSlice.actions
export default basketSlice.reducer