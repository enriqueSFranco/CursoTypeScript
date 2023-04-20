import { API } from '../constants.d'
import type { ErrorResponse, User } from '../types'

type NextCursor = number | undefined

interface UserResponse {
  users: User[]
  nextCursor: NextCursor
}

export async function getUsersService ({ pageParam = 1 }: { pageParam?: number }): Promise<UserResponse> {
  try {
    const url = new URL(API.USERS)
    url.searchParams.set('page', String(pageParam))
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
    const { results, info } = await response.json()
    const currentPage: number = Number(info.page)
    const nextCursor: NextCursor = currentPage >= 10 ? undefined : currentPage + 1
    return {
      users: results,
      nextCursor
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
