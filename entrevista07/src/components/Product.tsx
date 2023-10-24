import styles from '../styles/product.module.css'

type ProductProps = {
  name: string
  description: string
  price: string
  rank: number
}

export const Product = ({ name, description, price, rank }: ProductProps) => {
  return (
    <article className={styles.container}>
      <picture>
        <source />
      </picture>
      <div className={styles.product_detail}>
        <h2>{name}</h2>
        <div className={styles.product_description}>
          <p>{description}</p>
        </div>
        <footer className={styles.product_info}>
          <strong>{price}$</strong>
          <p>{rank}</p>
        </footer>
      </div>
    </article>
  )
}
