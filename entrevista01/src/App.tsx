import { useState } from 'react'
import { useUsers } from './hooks/useUsers'
import { User } from './types'
import Header from './components/Header'
import Table from './components/Table'
import './App.css'

function App() {
  const { users, initialUsers, setUsers } = useUsers()
  const [togglePaint, setTogglePaint] = useState<Boolean>(false)
  const [isSorted, setIsSorted] = useState<Boolean>(false)
  const [filterCity, setFilterCity] = useState<string | null>(null)

  function handlePaintRows(): void {
    setTogglePaint(!togglePaint)
  }

  function handleResetState() {
    setUsers(initialUsers.current)
  }

  function handleSortByCity() {
    setIsSorted(prevState => !prevState)
  }

  //El sort muta el array original
  /* const sortUsers: Array<User> = isSorted ? [...users].sort((a, b) => a.location.city.localeCompare(b.location.city)) : users */ // ESTO ESTA MAL

  const filterUsers = typeof filterCity === 'string' ? users.filter(user => user.location.country.toLocaleLowerCase().includes(filterCity?.toLowerCase())) : users

  const sortUsers: Array<User> = isSorted ? filterUsers.toSorted((a, b) => a.location.country.localeCompare(b.location.country)) : filterUsers

  function handleRemoveUser(email: string) {
    const copyData = [...users]
    const newUsers = copyData.filter(user => user.email.localeCompare(email))
    setUsers(newUsers)
  }

  return (
    <div className='App'>
      <Header
        onPaint={handlePaintRows}
        onSortByCity={handleSortByCity}
        onResetState={handleResetState}
        setFilterCity={setFilterCity}
      />
      <main>
        <Table
          users={sortUsers}
          paintRows={togglePaint}
          onRemove={handleRemoveUser}
        />
      </main>
    </div>
  )
}

export default App
