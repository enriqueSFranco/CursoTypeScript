import styles from '../styles/Loader.module.css'

const Loader: React.FC = () => {

  return (
    <div className={`${styles.card} ${styles.loading}`}>
      <div className={styles.question} />
      <div className={styles.answers}>
        <ul className={styles.optionList}>
        </ul>
      </div>
    </div>
  )
}

export default Loader