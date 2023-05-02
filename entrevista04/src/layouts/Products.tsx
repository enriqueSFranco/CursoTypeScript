import styles from '../styles/LayoutProducts.module.css'

interface Props {
  children: React.ReactNode
}

const LayoutProducts: React.FC<Props> = ({ children }) => {
  return (
    <section className={styles.wrapper}>
      {children}
    </section>
  )
}

export default LayoutProducts