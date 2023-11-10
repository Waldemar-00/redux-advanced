import Cart from './components/Cart/Cart' 
import Layout from './components/Layout/Layout' 
import Products from './components/Shop/Products' 
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const { isVisibleBasket } = useSelector(state => state.basket)
  const purchaseData = useSelector(state => state.purchases)
  useEffect(() => {
    fetch('https://custom-hooks-firebase-default-rtdb.firebaseio.com/basketProducts.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(purchaseData)
    })
  }, [purchaseData])
  return (
    <Layout>
      {
        isVisibleBasket && 
        <Cart />
      }
      <Products />
    </Layout>
  ) 
}

export default App 
