import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { FavProvider } from './context/FavContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FavProvider>
      <App />
    </FavProvider>
  </React.StrictMode>
)
