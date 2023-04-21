import { API } from '../constants.d'
import { ErrorResponse } from '../type'

export async function getAllPostsService() {
  try {
    const endpoint = new URL(`${API.POSTS}`)
    const response = await fetch(endpoint)
    
    if (!response.ok) {
      const statusCode: string = response.status === 0 || response.status === null ? '00' : String(response.status)
      const statusText: string = response.statusText === '' ? 'Opps, ha ocurrido un error' : response.statusText
      const error: ErrorResponse = {
        err: new Error('Opps, ha ocurrido un error durante la peticion'),
        statusCode,
        statusText
      }
      throw error
    }
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }
}