import { API } from '../constants.d'
import { Post, ErrorResponse } from '../type'

export async function addPostService({ payload }: { payload: Post }) {
  console.log(payload)
  try {
    const endpoint = new URL(`${API.POSTS}`)
    const response = await fetch(endpoint, {
      method: 'POST', headers: {
        'Content-Type': 'application/json',
    }, body: JSON.stringify(payload)})
    
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
    console.log(data)
    return data
  } catch (error) {
    return error
  }
}