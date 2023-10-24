import { Product } from '../Product'

export const ProductList = () => {
  return (
    <ul>
      <li key={`product-id-${crypto.randomUUID()}`}>
        <Product
          name='iphone'
          description='description'
          price='899'
          rank={5}
        />
      </li>
    </ul>
  )
}
