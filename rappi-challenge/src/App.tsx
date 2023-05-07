import Menu from './components/Menu'
import apiCategories from './api/categories.json'
import './App.css'

const categories = apiCategories.categories

function App() {

  return (
    <>
      <h1>Rappi Challenge</h1>
      <aside>
        <Menu categories={categories} />
      </aside>
    </>
  )
}

export default App
