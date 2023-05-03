import { useEffect, useState } from 'react'
import { searchBreed } from '../services/searchBreeds'

const LIMIT_RESUTLS = 10

export function useBreeds(query: string) {
  const [breeds, setBreeds] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    searchBreed(LIMIT_RESUTLS, query)
      .then(response => setBreeds(response))
      .catch(error => error)
      .finally(() => setLoading(false))
  }, [query])

  return { breeds, loading }
}
