import { useContext } from "react"
import { CartContex } from "../context/CartContext"

export function useCartContext () {
  const ctx = useContext(CartContex)

  if (ctx === null) {
    throw new Error('useThemeContext must be used within ThemeProvider')
  }

  return ctx
}
