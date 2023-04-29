import React from 'react'
import { useMovies } from '../store/movies'

const Form = () => {
  const fetchMovies = useMovies(state => state.fetchMovies)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const $form = e.target as HTMLFormElement
    const field = new FormData($form)
    const query = field.get('query') ?? ''

    if (typeof query === 'string' && query !== '') {
      // servicio para buscar la pelicula
      console.log(query)
      fetchMovies(query)
    }
    return
  }

  return (
    <div className='w-full h-16 grid place-items-center'>
      <form onSubmit={handleSubmit} className='w-2/3 h-16 grid place-items-center'>
        <div className='flex rounded-sm overflow-hidden w-2/3'>
          <input
            type='search'
            name='query'
            autoComplete='off'
            placeholder='Avengers, Spider Man, Justice Leage, etc...'
            className='text-blue-800 outline-none border-none w-full px-4'
          />
          <button className='bg-cyan-600 w-1/6 h-10'>Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default Form