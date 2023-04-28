import movie from './mocks/searchResponse.json'
import Form from './components/Form'
import './App.css'

const movies = movie.Search

const App: React.FC = () => {

  return (
    <div className='bg-black w-full h-screen flex flex-col items-center justify-center'>
      <h1>Entrevista 03</h1>
      {/* formulario de busqueda */}
      <Form />
      {/* contenido principal */}
      <main className='w-full'>
        <section>
          <ul className='grid xl:grid-cols-6 lg:grid-cols-5 gap-7'>
            {movies.map(movie => (
              <li key={`movie_id-${movie.imdbID}`}>
                <figure className='flex flex-col items-center overflow-hidden cursor-pointer scale-95 ease-in duration-300 hover:scale-100'>
                  <img src={movie.Poster} alt={movie.Title} className='rounded-md' />
                  <figcaption>
                    <h2>{movie.Title}</h2>
                    <span>{movie.Year}</span>
                  </figcaption>
                </figure>

              </li>
            ))}

          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
