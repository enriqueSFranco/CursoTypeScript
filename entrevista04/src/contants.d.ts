import { ApiConfig } from './types.d'

export const API: ApiConfig = Object.freeze({
  PRODUCTS: import.meta.env.VITE_ENDPOINT_PRODUCTS
})