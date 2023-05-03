import { createContext, useState } from 'react'
import { type Image } from '../types.d'

interface Props {
  children: React.ReactNode
}

interface Context {
  state: {
    favs: Set<Image>
  }
  actions: {
    toggleFav: (image: Image) => void
  }
}

export const FavContext = createContext({} as Context)

export const FavProvider: React.FC<Props> = ({ children }) => {
  const [favs, setFavs] = useState<Set<Image>>(() => new Set())

  const toggleFav = (image: Image): void => {
    setFavs(favorites => {
      const newFavorites: Set<Image> = new Set(favorites)
      if (newFavorites.has(image)) newFavorites.delete(image)
      else newFavorites.add(image)
      return newFavorites
    })
  }

  const data: Context = {
    state: {
      favs
    },
    actions: {
      toggleFav
    }
  }
  return (
    <FavContext.Provider value={data}>
      {children}
    </FavContext.Provider>
  )
}
