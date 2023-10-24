import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Bazar } from '../utils/Bazar'
import { Product } from '../shared/types'

const bazar = new Bazar()

export const ProductDetail = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const { id } = useParams()

  useEffect(() => {
    if (!id) {
      setProduct(undefined)
    } else {
      const productFound = bazar.getProduct({ productId: +id })
      setProduct(productFound)
    }

  }, [id])

  return (
    <section>
      <h2>{product?.title}</h2>
    </section>
  )
}
