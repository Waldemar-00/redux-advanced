import styles from "./CartButton.module.css" 
import { useDispatch } from 'react-redux'
import { basketActions } from '../../store/basket-slice.js'
import { useSelector } from 'react-redux'
const CartButton = () => {
  const allAmount = useSelector(state => state.purchases.allAmount)
  const dispatch = useDispatch()
  function toggleBasketVisible() {
    dispatch(basketActions.toggleBasket())
  }
  return (
    <button className={styles.button}
      onClick={toggleBasketVisible}
    >
      <span>Корзина</span>
      <span className={styles.badge}>{allAmount}</span>
    </button>
  ) 
} 

export default CartButton 
