import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { Post } from '../type'
import { addPostService, getAllPostsService } from '../service'

export function useGetAllPosts() {
  const { data, isLoading } = useQuery<Post[]>({ queryKey: ['posts'], queryFn: getAllPostsService, })

  return {
    results: data,
    isLoading
  }
}

export function useAddPosts() {
  const queryClient = useQueryClient()
  const { mutate, isLoading } = useMutation({
    mutationFn: addPostService, onSuccess: async (newPost) => {
      /* 1.- Actualizar el cache de react-query de forma manual */
      await queryClient.setQueryData(['posts'], (oldData?: Post[]) => {
        if (oldData == null) return [newPost]
        return [...oldData, newPost]
      })
    }
  })

  return { mutate, isLoadingMutation: isLoading }
}