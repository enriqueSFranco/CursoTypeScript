import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Movie } from '../types'
import { searchMovie } from '../service/searchMovie'

interface MovieState {
  movies: Movie[]
  getSortedMoviesByYear: (sort: boolean) => Movie[]
  fetchMovies: (title: string) => Promise<void>
}


export const useMovies = create<MovieState>()(persist(
  (set, get) => ({
    movies: [],
    getSortedMoviesByYear: (sort: boolean): Movie[] => {
      const { movies } = get()
      const sortedMovies = movies.toSorted((a: Movie, b: Movie) => Number(a.Year) - Number(b.Year))
      console.log('----->', movies)
      return sort ? sortedMovies : movies
    },
    fetchMovies: async (title: string): Promise<void> => {
      try {
        const response = await searchMovie(title)
        console.log('----->', response)
        set({ movies: response, })
      } catch (error) {
        throw error
      }
    }
  }),
  {
    name: '___zustand__state__',
    storage: createJSONStorage(() => localStorage)
  }
))