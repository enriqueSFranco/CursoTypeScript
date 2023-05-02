import { API } from '../contants.d'
import { type Product } from '../types.d'

export async function getProducts(): Promise<Product[]> {

  try {
    const url = new URL(API.PRODUCTS)
    const response = await fetch(url)

    if (!response.ok) {
      const statusCode: string = response.status === 0 || response.status === null ? '00' : String(response.status)
      const statusText: string = response.statusText === '' ? 'Opps, ha ocurrido un error' : String(response.statusText)

      const err = {
        error: new Error('Opps, ha ocurrido un error durante la petición'),
        statusCode,
        statusText
      }
      throw new Error(JSON.stringify(err))
    }
    const json: Product[] = await response.json()
    return json
  } catch (error) {
    throw new Error('Error al obtener los productos')
  }
}