import { useContext } from 'react'
import { FavContext } from '../context/FavContext'
import { Image } from '../types'

export const useFav = (): {
  favs: Set<Image>
  toggleFav: (image: Image) => void
} => {
  const { state: { favs }, actions: { toggleFav } } = useContext(FavContext)
  return { favs, toggleFav }
}
