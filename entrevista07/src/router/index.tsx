import { createHashRouter } from 'react-router-dom'
import App from '../App'
import { Products } from '../pages/Products'
import { ProductDetail } from '../pages/ProductDetail'

export const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/items',
    element: <Products />
  },
  {
    path: '/items/:id',
    element: <ProductDetail />
  }
])