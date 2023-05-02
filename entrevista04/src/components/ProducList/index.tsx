import Product from '../Product'
import { type Product as ProductType } from '@/types'
import styles from '@/styles/ProductList.module.css'

interface Props {
  products: ProductType[],
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <ul className={styles.wrapperProductList}>
      {products.map(({ id, name, image, price, rating }) => (
        <li key={`product-id_${id}`} className={styles.productListItem}>
          <Product
            name={name}
            image={image}
            price={price}
            rating={rating}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProductList