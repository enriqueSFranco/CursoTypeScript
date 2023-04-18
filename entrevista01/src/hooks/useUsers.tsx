import { useEffect, useState } from 'react'
import { getUsersService } from '../services'
import { type User } from '../types'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    // servicio para hacer la peticion a la api de reandomuser
    getUsersService()
      .then(response => setUsers(response.results))
      .catch(error => console.error(error))
  }, [])

  return users
}