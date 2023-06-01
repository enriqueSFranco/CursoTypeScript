import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const StoryDetails = lazy(() => import('./pages/StoryDetails.tsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/article/:id',
    element: <Suspense fallback={<div>loading...</div>}><StoryDetails /></Suspense>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
