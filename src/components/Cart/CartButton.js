import styles from "./CartButton.module.css" 
import { useDispatch } from 'react-redux'
import { basketActions } from '../../store/basket-slice.js'
const CartButton = () => {
  const dispatch = useDispatch()
  function toggleBasketVisible() {
    dispatch(basketActions.toggleBasket())
  }
  return (
    <button className={styles.button}
      onClick={toggleBasketVisible}
    >
      <span>Корзина</span>
      <span className={styles.badge}>2</span>
    </button>
  ) 
} 

export default CartButton 
