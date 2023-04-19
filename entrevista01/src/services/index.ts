import { API } from '../constants.d'
import type { ErrorResponse } from '../types'

export async function getUsersService (page: number) {
  try {
    const url = new URL(API.USERS)
    url.searchParams.set('page', String(page))
    const response = await fetch(url)

    if (!response.ok) {
      const statusCode: string = response.status === 0 || response.status === null ? '00' : String(response.status)
      const statusText: string = response.statusText === '' ? 'Opsss, ha ocurrido un error' : response.statusText
      const error: ErrorResponse = {
        err: new Error('Opsss, ha ocurrido un error durante la peticion'),
        status: statusCode,
        statusText
      }
      throw error
    }
    const json = await response.json()
    return json
  } catch (error) {
    console.error(error)
    throw error
  }
}
