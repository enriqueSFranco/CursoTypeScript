import { useMemo, useState } from 'react'
import { useProducts } from './hooks/useProducts'
import { Filters } from './types'
import ProductList from './components/ProducList'
import LayoutProducts from './layouts/Products'
import Color from './components/Filters/Color'
import Rating from './components/Filters/Rating'
import styles from './App.module.css'

function App() {
  const [filters, setFilters] = useState<Record<string, Filters>>({
    price: null,
    colors: null,
    rating: null
  })
  const products = useProducts()

  const matches = useMemo(() => {
    const filterToApply = Object.values(filters).filter(Boolean)
    let newProducts = products

    for (const filter of filterToApply) {
      newProducts = newProducts.filter(filter!)
    }
    return newProducts
  }, [filters, products])

  const handleFilters = (filter: Filters) => {
    const newFilters = { ...filters, color: filter }
    setFilters(newFilters)
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">Entrevista 04</h1>
      <main>
        <aside className={styles.filters}>
          <Color products={products} onChange={(filter) => handleFilters(filter)} />
          <Rating onChange={(filter) => handleFilters(filter)} />
        </aside>
        <LayoutProducts>
          <h2 className='tex-xl font-bold'>{matches.length} Resultados</h2>
          <ProductList products={matches} />
        </LayoutProducts>
      </main>
    </>
  )
}

export default App
