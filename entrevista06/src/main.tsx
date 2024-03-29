import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './style.css'

const $app = document.getElementById('app') as HTMLElement
const root = createRoot($app)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)