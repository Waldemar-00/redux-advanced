import { createSlice } from '@reduxjs/toolkit'

const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: { products: [], amount: 0 },
  redusers: {
    addProduct(state, action) {
      const foundProduct = state.products.find(prod => prod.id === action.payload.id)
      if (foundProduct) {
        foundProduct.amount++
        foundProduct.sum += action.payload.sum
      } else {
        state.products.push({
          productId: action.payload.id, 
          price: action.payload.price,
          amount: 1,
          sum: action.payload.price,
          title: action.payload.title
        })
      }
    }, 
    removeProduct(state) {},
    
  }
})
export const purchasesActions = purchasesSlice.actions
export default purchasesSlice.reducer //state