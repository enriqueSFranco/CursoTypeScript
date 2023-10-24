import styles from '../styles/Product.module.css'

type ProductProps = {
  title: string
  thumbnail: string
  description: string
  price: number
  rating: number
}

export const Product = ({ title, thumbnail, description, price, rating }: ProductProps) => {
  return (
    <article className={styles.container}>
      <picture>
        <source srcSet={thumbnail} />
        <img src={thumbnail} alt={`product-${title}`} width={200} />
      </picture>
      <div className={styles.product_detail}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.product_description}>{description}</p>
        <footer className={styles.product_info}>
          <strong>{price}$</strong>
          <p>{rating}</p>
        </footer>
      </div>
    </article>
  )
}
