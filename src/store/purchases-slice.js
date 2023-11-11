import { createSlice } from '@reduxjs/toolkit'
import { basketActions } from './basket-slice'
const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: { products: [], allAmount: 0, isDataChanged: false },
  reducers: {
    addProduct(state, action) {
      const foundProduct = state.products.find(prod => prod.id === action.payload.id)
      state.allAmount++
      state.isDataChanged = true
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
      state.isDataChanged = true
      if (foundProduct.amount === 1) {
        state.products = state.products.filter(prod => prod.id !== action.payload.id)
      } else {
        foundProduct.amount--
        foundProduct.sum = foundProduct.sum - action.payload.price
      }
    },
    updateBasket(state, action) {
      if (action.payload === null) {
        state.products = []
        state.allAmount = 0
        state.isDataChanged = false
      } else {
        state.products = action.payload.products
        state.allAmount = action.payload.allAmount
        state.isDataChanged = false
      }
    }
  }
})
export function sendData(purchaseData) {
  return (dispatch) => {
    dispatch(basketActions.showStatusMessage({
      status: 'pending',
      title: 'Отправка данных',
      message: 'Данные корзины отправляются на сервер...'
    }))
    fetch('https://custom-hooks-firebase-default-rtdb.firebaseio.com/products.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(purchaseData)
    })
      .then(response => response.json())
      .then(response => {
        dispatch(basketActions.showStatusMessage({
          status: 'success',
          title: 'Данные отправлены',
          message: 'Данные отправлены на сервер!'
        }))
        console.log(response) // we can show that in the popup
      })
      .catch(error => {
        dispatch(basketActions.showStatusMessage({
          status: 'error',
          title: 'Ошибка запроса((',
          message: 'Ошибка при отправке данных!'
        }))
        console.log(error)
      })
  }
}
export function getData() {
  return (dispatch) => {
    fetch('https://custom-hooks-firebase-default-rtdb.firebaseio.com/products.json')
      .then(response => response.json())
      .then(response => {
        if (response === null) {
          dispatch(basketActions.showStatusMessage({
            status: 'success',
            title: 'Ваших данных на сервере нет!',
            message: 'Ваших данных на сервере нет!'
          }))
        }
        dispatch(purchasesSlice.actions.updateBasket(response))
      })
      .catch(error => {
        dispatch(basketActions.showStatusMessage({
          status: 'error',
          title: 'Ошибка запроса на сервер (',
          message: 'Ошибка получения данных корзины!'
        }))
        console.log(error)
      })
  }
}
export const purchasesActions = purchasesSlice.actions
export default purchasesSlice.reducer //state