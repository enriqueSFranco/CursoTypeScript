import { useEffect, useState } from 'react'
import { Product } from '../types'
import { getProducts } from '../service/products'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response))
      .catch(error => console.error(error))
  }, [])

  return products
}