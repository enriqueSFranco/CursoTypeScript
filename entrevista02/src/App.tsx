import { useAddPosts, useGetAllPosts } from './hooks'
import type { Post } from './type'
import AppLayout from './layout/AppLayout'
import MainLayout from './layout/MainLayout'
import FormPost from './components/FormPost'
import PostList from './components/PostList'
import './App.css'

function App() {
  const { results, isLoading } = useGetAllPosts()
  const { mutate } = useAddPosts()

  const posts = results ?? []

  function addPost({ title, body }: { title: string, body: string }): void {
    const newPost: Post = {
      id: Math.random().toString(36).slice(2),
      title,
      body
    }
    mutate({ payload: newPost })
  }

  return (
    <AppLayout>
      <MainLayout>
        <main className='w-full flex flex-col gap-4'>
          <h1 className='text-xl text-white'>Lista de Publicaciones</h1>
          {isLoading && <strong className='text-white'>cargando</strong>}
          {!isLoading && <PostList posts={posts} />}
        </main>
        <aside className='p-4 w-full h-screen'>
          <FormPost addPost={addPost} />
        </aside>
      </MainLayout>
    </AppLayout>
  )
}

export default App
