import Product from '../Product'
import { type Product as ProductType } from '@/types'
import styles from '@/styles/ProductList.modue.css'

interface Props {
  products: ProductType[],
  wrapperProductList: string
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <ul className={styles.wrapperProductList}>
      {products.map(({ id, name, image, price, rating }) => (
        <li key={`product-id_${id}`}>
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