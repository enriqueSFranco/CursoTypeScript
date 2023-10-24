type Category = 'smartphones' | 'laptops' | 'fragrances' | 'skincare' | 'groceries' | 'home-decoration'

type ProductId = number

type Product = {
  id: ProductId,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

export { Product, ProductId }