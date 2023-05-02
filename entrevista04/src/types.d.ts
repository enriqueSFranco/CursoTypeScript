export interface Product {
  id: number;
  name: string;
  image: string;
  color: string;
  price: number;
  currency: Currency;
  releaseDate: Date;
  categoryId: number;
  rating: number;
}

export interface ApiConfig {
  PRODUCTS: string | URL
}

export enum Currency {
  Usd = "USD",
}
