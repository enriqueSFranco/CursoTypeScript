interface Props {
  title: string
  year: string
  poster: string
}

const Movie: React.FC<Props> = ({ title, year, poster }) => {
  return (
    <figure className='flex flex-col items-center overflow-hidden cursor-pointer scale-95 ease-in duration-300 hover:scale-100'>
      <img src={poster} alt={title} className='rounded-md' />
      <figcaption>
        <h2>{title}</h2>
        <span>{year}</span>
      </figcaption>
    </figure>
  )
}

export default Movie