import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: { isVisibleBasket: false, statusMessage: null},
  reducers: {
    toggleBasket(state) {
      state.isVisibleBasket = !state.isVisibleBasket
    },
    showStatusMessage(state, action) {
      state.statusMessage = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
})
export const basketActions = basketSlice.actions
export default basketSlice.reducer