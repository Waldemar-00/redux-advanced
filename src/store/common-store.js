import { configureStore } from "@reduxjs/toolkit"
import basketReducers from './basket-slice'
import purchasesReducers from './purchases-slice'

const store = configureStore({
  reducer: {
    basket: basketReducers, //state
    purchases: purchasesReducers, //state
  }
})
export default store