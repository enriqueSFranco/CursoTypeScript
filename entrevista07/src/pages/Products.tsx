import { Logo } from '../components/Logo'
import { ProductList } from '../components/ui/ProductList'
import { SearchForm } from '../components/ui/SearchForm'
import { useCartContext } from '../hooks/useCartContext'
import styles from '../styles/PageProducts.module.css'

export const Products = () => {
  const { products } = useCartContext()

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <Logo sx={{ width: 60, height: 60 }} />
        <SearchForm showButton={false} />
      </header>

      <ProductList products={products} />
    </section>
  )
}
