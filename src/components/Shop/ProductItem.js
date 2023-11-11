import Card from "../UI/Card" 
import styles from "./ProductItem.module.css" 
import { useDispatch } from 'react-redux'
import { purchasesActions } from "../../store/purchases-slice"
const ProductItem = ({ id, title, price, description }) => {
  const dispatch = useDispatch()
  function addProduct() {
    dispatch(purchasesActions.addProduct({ id, title, price }))
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
