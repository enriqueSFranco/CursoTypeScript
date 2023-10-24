import { Product, ProductId } from '../shared/types.d'
import data from '../api/db.json'

interface BazarActions {
  getProducts: () => Product[]
  searchProduct: ({ query }: { query: string }) => Product[]
  getProduct: ({ productId }: { productId: ProductId }) => Product | undefined
}

export class Bazar implements BazarActions {
  private products: Product[]

  constructor() {
    this.products = data.products
  }

  getProducts (): Product[] {
    return this.products
  }

  getProduct ({ productId }: { productId: ProductId }): Product | undefined {
    let low = 0
    let high = this.products.length - 1

    while (low <= high) {
      const middle = low + Math.floor((high - low) / 2)

      if (this.products[middle].id === productId) return this.products[middle]

      if (this.products[middle].id < productId) {
        low = middle + 1
      } else {
        high = middle - 1
      }
    }
    return undefined
  }

  searchProduct ({ query }: { query: string }): Product[] {
    return this.products.filter(product => product.category.includes(query))
  }
}