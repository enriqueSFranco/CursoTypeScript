import { useForm } from '../store/form'
import { useMovies } from '../store/movies'
import Movie from './Movie'

const MovieList: React.FC = () => {
  const orderByYear = useForm(state => state.orderByYear)
  const movies = useMovies(state => state.movies)

  return (
    <ul className='grid xl:grid-cols-6 lg:grid-cols-5 gap-7'>
      {movies.map(({ imdbID, Title, Year, Poster }) => (
        <li key={`movie_id-${imdbID}`}>
          <Movie title={Title} year={Year} poster={Poster} />
        </li>
      ))}

    </ul>
  )
}

export default MovieList