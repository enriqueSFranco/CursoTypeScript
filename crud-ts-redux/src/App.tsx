import { useAppSelector } from './hooks/store'
import { Card, Title } from '@tremor/react'
import CustomTable from './components/Table'
import './App.css'

function App() {
  const data = useAppSelector(state => state.users)
  return (
    <div className='App'>
      <main>
        <Card>
          <Title>Usuarios</Title>
          <CustomTable />
        </Card>
      </main>
    </div>
  )
}

export default App
