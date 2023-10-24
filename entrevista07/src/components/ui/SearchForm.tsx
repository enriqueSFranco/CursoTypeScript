import { useNavigate } from 'react-router-dom'
import { IconSearch } from '../Icon'
import { useCartContext } from '../../hooks/useCartContext'
import styles from '../../styles/SearchForm.module.css'

type SearchFormProps = {
  showButton: boolean
}

export const SearchForm = ({ showButton = true }: SearchFormProps) => {
  const navigate = useNavigate()
  const { handleSearchProduct } = useCartContext()

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const { elements } = e.currentTarget
    const input = elements.namedItem('query')

    const isInput = input instanceof HTMLInputElement

    if (input === null || !isInput) return

    if (input.value.trim().length === 0) return

    handleSearchProduct({ query: input.value })
    navigate('/items')
    input.value = ''
  }

  return (
    <form onSubmit={handleSubmit} aria-label='Buscar productos' className={styles.form}>
      <div className={styles.box_input}>
        <input type='text' name='query' placeholder='laptops, smartphones, ...' autoComplete='off' />
        <IconSearch />
      </div>
      {showButton ? <button className={styles.btn_search}>buscar</button> : null}
    </form>
  )
}