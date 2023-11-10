import styles from "./CartItem.module.css" 
import { useDispatch } from 'react-redux'
import { purchasesActions } from "../../store/purchases-slice"
const CartItem = ({ item }) => {
  const { id, title, amount, sum, price } = item 
  const dispatch = useDispatch()
  function addPurchase() {
    dispatch(purchasesActions.addProduct({ id, title, price }))
  }
  function removePurchase() {
    dispatch(purchasesActions.removeProduct({ id, title, price }))
  }
  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${sum.toFixed(2)}{" "}
          <span className={styles["item-price"]}>
            (${price.toFixed(2)} / шт.)
          </span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{amount}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removePurchase}>-</button>
          <button onClick={addPurchase}>+</button>
        </div>
      </div>
    </li>
  ) 
} 

export default CartItem 
