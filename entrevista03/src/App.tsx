import movie from './mocks/searchResponse.json'
import Form from './components/Form'
import MovieList from './components/MovieList'
import './App.css'

const movies = movie.Search

const App: React.FC = () => {

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Entrevista 03</h1>
      {/* formulario de busqueda */}
      <Form />
      {/* contenido principal */}
      <main className='w-full'>
        <section>
          <MovieList />
        </section>
      </main>
    </div>
  )
}

export default App
