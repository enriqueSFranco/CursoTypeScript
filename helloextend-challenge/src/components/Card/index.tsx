import { useFav } from '../../hooks/useFav'
import { IconHeart } from '../Icon/index'

interface Props {
  image: string
  handleFav?: (image: string) => void
}

const CardDog: React.FC<Props> = ({ image, handleFav = () => { } }) => {
  const { favs } = useFav()

  return (
    <figure className='flex flex-col w-full h-64 overflow-hidden rounded-md relative scale-95 transition duration-500 ease-in-out hover:scale-100'>
      <img src={image} alt={image} className='h-full w-full aspect-3/2 mix-blend-color-burn' />
      <button
        onClick={() => handleFav(image)}
        className='absolute grid place-items-center bottom-2 right-2 w-8 h-8 hover:bg-slate-50/30 rounded-full'
      >
        {[...favs].includes(image) ? <IconHeart color='#ff0000' /> : <IconHeart color='#fff' />}
      </button>
    </figure>
  )
}

export default CardDog
