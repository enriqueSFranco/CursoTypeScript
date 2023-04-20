import { useState } from 'react'
import type { Post } from './type'
import { addPostService } from './service/addPostService'
import fakeApi from './api/db.json'
import AppLayout from './layout/AppLayout'
import MainLayout from './layout/MainLayout'
import FormPost from './components/FormPost'
import PostList from './components/PostList'
import './App.css'

const initialDB = fakeApi.posts

function App() {
  const [posts, setPosts] = useState<Post[]>(initialDB ?? [])

  function addPost({ title, body }: { title: string, body: string }): void {
    const newPost: Post = {
      id: Math.random().toString(36).slice(2),
      title,
      body
    }
    addPostService({ payload: newPost })
      .then(response => console.log(response))
      .catch(error => console.error(error))
    setPosts([...posts, newPost])
  }

  console.log(posts)

  return (
    <AppLayout>
      <MainLayout>
        <main className='w-full flex flex-col gap-4'>
          <h1 className='text-xl text-white'>Lista de Publicaciones</h1>
          <PostList posts={posts} />
        </main>
        <aside className='p-4 w-full h-screen'>
          <FormPost addPost={addPost} />
        </aside>
      </MainLayout>
    </AppLayout>
  )
}

export default App
