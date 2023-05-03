import { numberFormat } from '@/utils/numberFormat.ts'
import styles from '@/styles/Product.module.css'

interface Props {
  name: string
  image: string
  color: string
  price: number
  rating: number
}

const Product: React.FC<Props> = ({ name, image, color, rating, price }) => {
  return (
    <article className={styles.wrapperProduct}>
      <div className={styles.wrapperImage}>
        <img src={image} alt={`product-${name}`} />
      </div>
      <div className={styles.productInfo}>
        <strong className={styles.productName}>{name}</strong>
        <p>{rating}</p>
        <p><span className='w-10 h-10 rounded-md p-1' style={{ backgroundColor: color }}>{color}</span></p>
        <p>{numberFormat(price)}</p>
      </div>
    </article>
  )
}

export default Product