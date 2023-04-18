import { API } from '../constants.d'

export async function getUsersService () {
  try {
    const response = await fetch(API.USERS)

    if (!response.ok) {
      const error = {
        err: new Error('Opsss, ha ocurrido un error durante la peticion'),
        status: response.status || '00',
        statusText: response.statusText || 'Opsss, ha ocurrido un error'
      }
      throw error
    }
    const json = await response.json()
    return json
  } catch (error) {
    console.error(error)
  }
}
