import Card from "../UI/Card" 
import styles from "./ProductItem.module.css" 
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { purchasesActions } from "../../store/purchases-slice"
const ProductItem = ({ id, title, price, description }) => {
  const dispatch = useDispatch()
  // const purchases = useSelector(state => state.purchases)
  function addProduct() {
    // const products = purchases.products.slice()
    // const index = products.findIndex(product => product.id === id)
    // const allAmount = purchases.allAmount + 1
    // const foundProduct = products.find(product => product.id === id)
    // if (foundProduct) {
      // const productsHere = {...foundProduct}
      // productsHere.amount++
      // productsHere.sum = productsHere.sum + price
      // products[index] = productsHere
    // } else {
      // products.push({
        // id: id,
        // price: price,
        // amount: 1,
        // sum: price,
        // title: title
      // })
    // }
    // const sendData =
    // {
      // products,
      // allAmount
    // }
    // dispatch(purchasesActions.updatePurchases({
      // products,
      // allAmount
    // }))
    dispatch(purchasesActions.addProduct({ id, title, price }))
    // fetch('https://custom-hooks-firebase-default-rtdb.firebaseio.com/basketProducts.json', {
      // method: 'POST',
      // headers: {
        // 'Content-Type': 'application/json'
      // },
      // body: JSON.stringify(sendData)
    // })
  }
  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addProduct}>Добавить в Корзину</button>
        </div>
      </Card>
    </li>
  ) 
} 

export default ProductItem 
