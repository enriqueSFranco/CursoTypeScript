import { Card, Title } from '@tremor/react'
import { Toaster } from 'sonner'
import CustomTable from './components/Table'
import Form from './components/Form'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Form />
      <main>
        <Card>
          <Title>Usuarios</Title>
          <CustomTable />
        </Card>
      </main>
      <Toaster richColors />
    </div>
  )
}

export default App
