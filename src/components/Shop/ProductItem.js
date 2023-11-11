import Card from "../UI/Card" 
import styles from "./ProductItem.module.css" 
import { useDispatch, useSelector } from 'react-redux'
import { purchasesActions } from "../../store/purchases-slice"
// import { basketActions } from '../../store/basket-slice'
import { sendData } from "../../store/purchases-slice"
import { useEffect } from 'react'
const ProductItem = ({ id, title, price, description }) => {
  const dispatchPurchase = useDispatch()
  // const dispatchBasket = useDispatch()
  const dispatchThunk = useDispatch()
  const purchaseData = useSelector(state => state.purchases)
  function addProduct() {
    dispatchPurchase(purchasesActions.addProduct({ id, title, price }))
  }
  useEffect(() => {
    if (purchaseData.products.length > 0) {
      dispatchThunk(sendData(purchaseData))
      // dispatchBasket(basketActions.showStatusMessage({
        // status: 'pending',
        // title: 'Отправка данных',
        // message: 'Данные корзины отправляются на сервер...'
      // }))
      // fetch('https://custom-hooks-firebase-default-rtdb.firebaseio.com/products.json', {
        // method: 'PUT',
        // headers: {
          // 'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(purchaseData)
      // })
        // .then(response => response.json())
        // .then(response => {
          // dispatchBasket(basketActions.showStatusMessage({
            // status: 'success',
            // title: 'Данные отправлены',
            // message: 'Данные отправлены на сервер!'
          // }))
          // console.log(response) // we can show that in the popup
        // })
        // .catch(error => {
          // dispatchBasket(basketActions.showStatusMessage({
            // status: 'error',
            // title: 'Ошибка запроса((',
            // message: 'Ошибка при отправке данных!'
          // }))
          // console.log(error)
        // })
      }
  }, [purchaseData, dispatchThunk])
  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={() => {
            addProduct()
          }}>Добавить в Корзину</button>
        </div>
      </Card>
    </li>
  ) 
} 

export default ProductItem 
