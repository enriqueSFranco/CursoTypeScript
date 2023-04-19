import { API } from '../constants.d'

export async function getUsersService ({ currentPage }) {
  try {
    const url = new URL(API.USERS)
    url.searchParams.set('page', currentPage)
    const response = await fetch(url)

    if (!response.ok) {
      const error = {
        err: new Error('Opsss, ha ocurrido un error durante la peticion'),
        status: response.status || '00',
        statusText: response.statusText || 'Opsss, ha ocurrido un error'
      }
      throw error
    }
    const json = await response.json()
    const { results, info } = json
    const nextCursor: number = info.page
    return {
      results,
      nextCursor
    }
  } catch (error) { // AQUI NO SE CAPTURAN LOS ERRORES
    console.error(error)
  }
}
