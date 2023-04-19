import { useEffect, useRef, useState } from 'react'
import { getUsersService } from '../services'
import { type User } from '../types'

const INITIAL_PAGE = 1

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)
  const [loading, setLoading] = useState<Boolean>(false)
  const initialUsers = useRef<User[]>([]) // useRef: guarda un valor que queremos
  // que se comparta entre renderizados, pero que al cambiar,
  // no vuelva a renderizar el componente

  useEffect(() => {
    setLoading(true)
    // servicio para hacer la peticion a la api de randomuser
    getUsersService({ currentPage })
      .then(response => {
        const { results } = response
        setUsers(results)
        initialUsers.current = results // referencia para volver a recuperar el estado inicial
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [currentPage])

  return { users, loading, initialUsers, setUsers, setCurrentPage }
}