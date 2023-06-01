import { API } from '../share/constants.d'
import { Story } from '../share/types.d'

const topStoriesURL = API.TOP_STORIES
const itemsURL = API.ITEMS_HACKER_NEW

/**
 * Obtiene una lista paginada de historias de Hacker News.
 * @param {Object} options - Opciones de paginación.
 * @param {number} options.page - Número de página a recuperar.
 * @param {number} options.limit - Límite de elementos por página.
 * @returns {Promise<number[]>} - Promesa que resuelve en una lista de identificadores de historias.
 */
export async function getTopStories({ page, limit }: { page: number, limit: number }): Promise<Story[]> {
  /* https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty */
  try {
    const url = new URL(topStoriesURL)
    const response = await fetch(url)

    if (!response.ok) {
      const statusCode: string = response.status === 0 || response.status === null ? '00' : String(response.status)
      const statusText: string = response.statusText === '' ? 'Opps, ha ocurrido un error' : response.statusText
      const error = {
        err: new Error('Opps, ha ocurrido un error durante la petción.'),
        statusCode,
        statusText
      }
      throw error
    }

    const start = (page - 1) * limit
    const end = page * limit
    const json = await response.json()
    const ids: number[] = json.slice(start, end)
    return await Promise.all(ids.map(id => getItemInfo({ id })))
  } catch (error) {
    throw new Error('Error al obtener las historias')
  }
}

export async function getItemInfo({ id }: { id: number }): Promise<Story> {
  try {
    const url = new URL(`${itemsURL}/${id}.json`)
    const response = await fetch(url)
    if (!response.ok) {
      const statusCode: string = response.status === 0 || response.status === null ? '00' : String(response.status)
      const statusText: string = response.statusText === '' ? 'Opps, ha ocurrido un error' : response.statusText
      const error = {
        err: new Error('Opps, ha ocurrido un error durante la petción.'),
        statusCode,
        statusText
      }
      throw error
    }
    const json = await response.json()
    return json
  } catch (error) {
    throw new Error('Error al obtener informacion de la historia')
  }
}