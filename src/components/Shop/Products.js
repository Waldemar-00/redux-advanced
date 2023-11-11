import ProductItem from "./ProductItem" 
import styles from "./Products.module.css" 
const PRODUCTS = [
  {
    key: '1',
    title: "Супер-Товар 1",
    price: 7, 
    description: "Tовар номер 1 прослужит вам очень долго."
  },
  {
    key: '2',
    title: "Супер-Товар 2",
    price: 9,
    description: "Tовар номер 2 прослужит вам очень долго." },
  {
    key: '3',
    title: "Супер-Товар 3",
    price: 11,
    description: "Tовар номер 3 прослужит вам очень долго."
  },
]
const Products = () => {
  return (
    <section className={styles.products}>
      <h2>В нашем магазине товары самого высокого качества</h2>
      <ul>
        {
          PRODUCTS.map(product => {
            return (
              <ProductItem
                key={product.key}
                id={product.key}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            )
          })
        }
      </ul>
    </section>
  ) 
} 

export default Products 
