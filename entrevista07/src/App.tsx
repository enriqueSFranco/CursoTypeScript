import { useNavigate } from 'react-router-dom'
import './App.css'

function App () {
  const navigate = useNavigate()

  function handleNavigate () {
    navigate('/products')
  }

  return (
    <main>
      <h1>bazar online</h1>
      <form action="">
        <div>
          <input type="text" placeholder="laptops, smartphones" />
        </div>
        <button onClick={handleNavigate}>buscar</button>
      </form>
    </main>
  )
}

export default App
