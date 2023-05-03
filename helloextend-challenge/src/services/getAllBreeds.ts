import { API } from '../constants.d'

interface ErrorResponse {
  error: Error
  statusCode: string
  statusText: string
}

export async function getAllBreeds(limit: number): Promise<string[]> {
  try {
    /*  const endpointBreeds = new URL(API.LIST_ALL_BREEDS)
     const endpointRandomImages = new URL(API.RANDOM_IMAGE_BREED) */
    const endpointRandomImages = new URL(API.RANDOM_IMAGE_BREED)
    const response = await fetch(`${endpointRandomImages}/${limit}`)

    if (!response.ok) {
      const statusCode: string = response.status === null || response.status === 0 ? '00' : String(response.status)
      const statusText: string = response.statusText === '' ? 'Oppps, ha ocurrido un error' : response.statusText

      const err: ErrorResponse = {
        error: new Error('Oppps, ha ocurrido un error durante la peticion.'),
        statusCode,
        statusText
      }
      throw err
    }
    const json = await response.json()
    const { message } = json

    if (message === undefined || !Array.isArray(message)) {
      throw new Error('Unexpected response format from server')
    }
    return message
  } catch (error) {
    return error
  }
}
