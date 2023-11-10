import Card from "../UI/Card" 
import styles from "./Cart.module.css" 
import CartItem from "./CartItem" 
import { useSelector } from 'react-redux'
const Cart = () => {
  const { products } = useSelector(state => state.purchases)
  return (
    <Card className={styles.cart}>
      <h2>Мои Покупки</h2>
      <ul>
        {
          products.map(product => {
            return <CartItem key={product.id}
              item={{
                id: product.id,
                title: product.title,
                amount: product.amount,
                sum: product.sum,
                price: product.price
              }}
            />
          })
        }
      </ul>
    </Card>
  ) 
} 

export default Cart 
