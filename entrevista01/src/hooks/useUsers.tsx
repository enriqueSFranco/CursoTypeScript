import { useEffect, useRef, useState } from 'react'
import { getUsersService } from '../services'
import { type User } from '../types'

const INITIAL_PAGE = 1

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<Boolean>(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const initialUsers = useRef<User[]>([]) // useRef: guarda un valor que queremos
  // que se comparta entre renderizados, pero que al cambiar,
  // no vuelva a renderizar el componente

  useEffect(() => {
    setLoading(true)
    // servicio para hacer la peticion a la api de randomuser

    getUsersService(page)
      .then(response => {
        if (JSON.stringify(response.results) !== JSON.stringify(initialUsers.current)) {
          setUsers(prevResults => {
            const newResults = prevResults.concat(response.results)
            initialUsers.current = newResults
            return newResults
          })
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [page])

  return { users, loading, initialUsers, setUsers, setPage }
}