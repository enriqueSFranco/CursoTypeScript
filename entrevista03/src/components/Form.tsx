import { useRef } from 'react'
import { useMovies } from '../store/movies'
import { useForm } from '../store/form'

const Form = () => {
  const previousSearch = useRef('')
  const fetchMovies = useMovies(state => state.fetchMovies)
  const setSortByYear = useForm(state => state.setSortByYear)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const $form = e.target as HTMLFormElement
    const field = new FormData($form)
    const query = field.get('query') ?? ''

    if (previousSearch.current === query) return

    if (typeof query === 'string' && query !== '') {
      // servicio para buscar la pelicula
      console.log(previousSearch.current, query)
      previousSearch.current = query
      fetchMovies(query)
    }
    return
  }

  return (
    <div className='w-full h-36 grid place-items-center'>
      <form onSubmit={handleSubmit} className='w-full h-36 flex flex-col items-center justify-center gap-4'>
        <div className='flex rounded-sm overflow-hidden w-2/6'>
          <input
            type='search'
            name='query'
            autoComplete='off'
            placeholder='Avengers, Spider Man, Justice Leage, etc...'
            className='text-blue-800 outline-none border-none w-full px-4'
          />
          <button className='bg-cyan-600 w-2/6 h-10'>Buscar</button>
        </div>
        <label htmlFor='sort-by-year' className='flex gap-2'>
          <input type="checkbox" name='sort-by-year' id='sort-by-year' onChange={e => setSortByYear(e.target.checked)} />
          <span>Orderna por año</span>
        </label>
      </form>
    </div>
  )
}

export default Form