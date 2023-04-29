import { API } from '../contants.d'
import { ErrorResponse, Movie } from '../types'

export async function searchMovie(titleMovie: string): Promise<Movie[]> {
  try {
    const url = new URL(`${API.OMDB_API}?s=${titleMovie}`)
    url.searchParams.set('apikey', API.API_KEY)

    const response = await fetch(url)

    if (!response.ok) {
      const statusCode: string = response.status === 0 || response.status === null ? '00' : String(response.status)
      const statusText: string = response.statusText === '' ? 'Oppps, ha ocurrido un error duranre la peticion' : response.statusText

      const err: ErrorResponse = {
        error: new Error('Oppps, ha ocurrido un error duranre la peticion'),
        statusCode,
        statusText
      }
      throw err
    }
    const { Search } = await response.json()
    return Search as Movie[]
  } catch (error) {
    throw error
  }
}