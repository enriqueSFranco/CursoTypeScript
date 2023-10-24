import { ProductList } from '../components/ui/ProductList'

export const Products = () => {
  return (
    <section>
      <header>
        <h2>logo</h2>
        <form>
          <div>
            <input type='text' placeholder='laptops, smartphones' />
          </div>
          <button>buscar</button>
        </form>
      </header>

      <div>
        <h3>resultados de busqueda de 'smart': 12</h3>
        <ul>
          <li><span>smartphones: 5</span></li>
          <li><span>fragances: 2</span></li>
        </ul>
      </div>

      <div>
        <ProductList />
      </div>
    </section>
  )
}
