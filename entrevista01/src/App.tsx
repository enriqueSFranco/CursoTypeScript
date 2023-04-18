import { useUsers } from './hooks/useUsers'
import Header from './components/Header'
import Table from './components/Table'
import './App.css'

function App() {
  const users = useUsers()

  return (
    <div className='App'>
      <Header />
      <main>
        <Table users={users} />
      </main>
    </div>
  )
}

export default App
