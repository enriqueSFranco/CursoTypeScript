import { useInfiniteQuery } from '@tanstack/react-query'
import { getUsersService } from '../services'
import type { User } from '../types.d'

export function useUserRQ () {
  const { data, isLoading, hasNextPage, refetch, fetchNextPage } = useInfiniteQuery<{ nextCursor?: number, users: User[] }>({ queryKey: ['users'], queryFn: getUsersService, getNextPageParam: (lastPage, pages) => lastPage.nextCursor })

  return { data, isLoading, hasNextPage, refetch, fetchNextPage }
}
