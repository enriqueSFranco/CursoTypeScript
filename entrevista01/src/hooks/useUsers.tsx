import { useEffect, useRef, useState } from 'react'
import { getUsersService } from '../services'
import { type User } from '../types'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const initialUsers = useRef<User[]>([]) // useRef: guarda un valor que queremos
  // que se comparta entre renderizados, pero que al cambiar,
  // no vuelva a renderizar el componente

  useEffect(() => {
    // servicio para hacer la peticion a la api de randomuser
    getUsersService()
      .then(response => {
        const { results } = response
        setUsers(results)
        initialUsers.current = results
      })
      .catch(error => console.error(error))
  }, [])

  return { users, initialUsers, setUsers }
}