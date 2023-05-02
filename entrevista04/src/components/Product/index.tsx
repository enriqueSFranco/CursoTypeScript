import styles from '@/styles/Product.module.css'

interface Props {
  name: string
  image: string
  price: number
  rating: number
}

const Product: React.FC<Props> = ({ name, image, rating, price }) => {
  return (
    <article className={styles.wrapperProduct}>
      <div className={styles.wrapperImage}>
        <img src={image} alt={`product-${name}`} />
      </div>
      <div>
        <strong>{name}</strong>
        <span>{rating}</span>
        <span>{price}</span>
      </div>
    </article>
  )
}

export default Product