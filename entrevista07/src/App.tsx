import { Logo } from './components/Logo'
import { SearchForm } from './components/ui/SearchForm'
import './App.css'

function App () {
  return (
    <main>
      <Logo />
      <h1 className='app-title'>bazar online</h1>
      <SearchForm showButton />
    </main>
  )
}

export default App
