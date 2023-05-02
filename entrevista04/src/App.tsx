import ProductList from './components/ProducList'
import { useProducts } from './hooks/useProducts'
import LayoutProducts from './layouts/Products'
import './App.css'


function App() {
  const products = useProducts()

  return (
    <>
      <h1>entrevista 04</h1>
      <main>
        <aside>
          <h2>aside</h2>
        </aside>
        <LayoutProducts>
          <ProductList products={products} />
        </LayoutProducts>
      </main>
    </>
  )
}

export default App
