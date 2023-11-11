import Cart from './components/Cart/Cart' 
import Layout from './components/Layout/Layout' 
import Products from './components/Shop/Products' 
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { purchasesActions } from './store/purchases-slice'
import { useEffect } from 'react'
import { getData } from './store/purchases-slice'
import StatusBarMessage from './components/UI/StatusBarMessage'

function App() {
  const { isVisibleBasket, statusMessage } = useSelector(state => state.basket)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  // const dispatch = useDispatch()
  // const purchaseData = useSelector(state => state.purchases)
  // useEffect(() => {
    // dispatch(basketActions.showStatusMessage({
      // status: 'pending',
      // title: 'Отправка данных',
      // message: 'Данные корзины отправляются на сервер...'
    // }))
    // fetch('https://custom-hooks-firebase-default-rtdb.firebaseio.com/basketProducts.json', {
      // method: 'PUT',
      // headers: {
        // 'Content-Type': 'application/json'
      // },
      // body: JSON.stringify(purchaseData)
    // })
      // .then(response => response.json())
      // .then(response => {
        // dispatch(basketActions.showStatusMessage({
          // status: 'success',
          // title: 'Данные отправлены',
          // message: 'Данные отправлены на сервер!'
        // }))
        // console.log(response) // we can show that in the popup
      // })
      // .catch(error => {
        // dispatch(basketActions.showStatusMessage({
          // status: 'error',
          // title: 'Ошибка запроса((',
          // message: 'Ошибка при отправке данных!'
        // }))
        // console.log(error)
      // })
  // }, [purchaseData, dispatch])
  return (
    <Layout>
      {
        statusMessage &&
        <StatusBarMessage status={statusMessage} />
      }
      {
        isVisibleBasket && 
        <Cart />
      }
      <Products />
    </Layout>
  ) 
}

export default App 
