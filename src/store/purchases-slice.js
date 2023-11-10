import { createSlice } from '@reduxjs/toolkit'

const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: { products: [], allAmount: 0 },
  reducers: {
    addProduct(state, action) {
      const foundProduct = state.products.find(prod => prod.id === action.payload.id)
      state.allAmount++
      if (foundProduct) {
        foundProduct.amount++
        foundProduct.sum = foundProduct.sum + action.payload.price
      } else {
        state.products.push({
          id: action.payload.id, 
          price: action.payload.price,
          amount: 1,
          sum: action.payload.price,
          title: action.payload.title
        })
      }
    }, 
    removeProduct(state,action) {
      const foundProduct = state.products.find(prod => prod.id === action.payload.id)
      state.allAmount--
      if (foundProduct.amount === 1) {
        state.products = state.products.filter(prod => prod.id !== action.payload.id)
      } else {
        foundProduct.amount--
        foundProduct.sum = foundProduct.sum - action.payload.price
      }
    },
    // updatePurchases(state, action) {
      // state.products = action.payload.products
      // state.allAmount = action.payload.allAmount
    // }
  }
})
export const purchasesActions = purchasesSlice.actions
export default purchasesSlice.reducer //state