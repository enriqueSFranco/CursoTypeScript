import { createContext, useState } from "react"
import { Product } from "../shared/types.d"
import { Bazar } from "../utils/Bazar"

const bazar = new Bazar()

export type CartContexType = {
  products: Product[]
  handleSearchProduct: ({ query }: { query: string }) => void
}

type CartProviderProps = {
  children: React.ReactNode
}

export const CartContex = createContext<CartContexType | null>(null)

export function CartProvider ({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  function handleSearchProduct ({ query }: { query: string }) {
    const matchedProducts = bazar.searchProduct({ query })
    setProducts(matchedProducts)
  }

  const data = {
    products,
    handleSearchProduct
  }

  return (
    <CartContex.Provider value={data}>
      {children}
    </CartContex.Provider>
  )
}