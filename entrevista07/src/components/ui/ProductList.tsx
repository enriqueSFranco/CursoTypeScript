import { Link } from 'react-router-dom'
import { Product as ProductType } from '../../shared/types.d'
import { Product } from '../Product'
import styles from '../../styles/ProductList.module.css'

type ProductListProps = { products: ProductType[] }

export const ProductList = ({ products }: ProductListProps) => {
  if (!products.length) {
    return (
      <div>
        <h2>No hay productos</h2>
      </div>
    )
  }

  return (
    <>
      <div>
        <h3>resultados de busqueda de 'smart': 12</h3>
        <ul>
          <li><span>smartphones: 5</span></li>
          <li><span>fragances: 2</span></li>
        </ul>
      </div>
      <ul className={styles.product_list}>
        {products.map(product => (
          <li key={`product-id-${product.id}`}>
            <Link to={`/items/${product.id}`}>
              <Product
                title={product.title}
                thumbnail={product.thumbnail}
                description={product.description}
                price={product.price}
                rating={product.rating}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
