import { type Product } from '@/types'

export function getProductsColors(data: Product[]): string[] {
  const colors: Set<string> = new Set()
  for (const product of data) {
    colors.add(product.color)
  }
  return Array.from(colors)
}