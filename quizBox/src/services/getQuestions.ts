import type { ErrorResponse, Question } from '../types'

export async function getQuestions(amount: number): Promise<Question[]> {
  try {
    const url = new URL(`https://opentdb.com/api.php?amount=${amount}`)
    const response = await fetch(url)
    if (!response.ok) {
      const statusCode: string = response.status === 0 || response.status === null ? 'Oppps, ha ocurrido un error durante la peticion.' : String(response.status)
      const statusText: string = response.statusText === '' ? 'Oppps, ha ocurrido un error' : response.statusText
      const error: ErrorResponse = {
        err: new Error('Oppps, ha ocurrido un error durante la peticion.'),
        statusCode,
        statusText
      }
      throw error
    }
    const json = await response.json()
    const { results } = json
    /* TODO: Mejorar la permutacion aleatoria */
    const data = results.sort(() => Math.random() - 0.5).slice(0, amount)
    return data
  } catch (error) {
    throw error
  }
}