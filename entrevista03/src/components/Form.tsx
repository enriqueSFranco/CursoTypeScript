import React from 'react'

const Form = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const $form = e.target as HTMLFormElement
    const field = new FormData($form)
    const query = field.get('query')

    if (query === '') return

    // servicio para buscar la pelicula
    console.log('buscando: ', query)

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex'>
        <input type='search' name='query' placeholder='Avengers, Spider Man, Justice Leage, etc...' />
        <button>Buscar</button>
      </div>
    </form>
  )
}

export default Form