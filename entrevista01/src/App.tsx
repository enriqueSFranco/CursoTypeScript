import { useMemo, useState } from 'react'
import { useUsers } from './hooks/useUsers'
import { User, SortBy } from './types.d'
import Header from './components/Header'
import Table from './components/Table'
import './App.css'

function App() {
  const { users, loading, initialUsers, setUsers, setCurrentPage } = useUsers()
  const [togglePaint, setTogglePaint] = useState<Boolean>(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.None)
  const [filterCity, setFilterCity] = useState<string | null>(null)

  function handlePaintRows(): void {
    setTogglePaint(!togglePaint)
  }

  function handleResetState() {
    setUsers(initialUsers.current)
  }

  function handleSortByCity() {
    const sortingValue = sorting === SortBy.None
      ? SortBy.City : SortBy.None
    setSorting(sortingValue)
  }

  function handleChangeSorting(sort: SortBy) {
    console.log({ sort })
    setSorting(sort)
  }

  //El sort muta el array original
  /* const sortUsers: Array<User> = isSorted ? [...users].sort((a, b) => a.location.city.localeCompare(b.location.city)) : users */ // ESTO ESTA MAL

  const filterUsers = useMemo(() => {
    console.log('filterUsers')
    return typeof filterCity === 'string'
      ? users.filter(user => user.location.country.toLocaleLowerCase().includes(filterCity?.toLowerCase()))
      : users
  }, [filterCity, users])

  // const sortUsers: Array<User> = isSorted ? filterUsers.toSorted((a, b) => a.location.country.localeCompare(b.location.country)) : filterUsers

  const sortUsers = (users: User[]) => {

    if (sorting === SortBy.None) return users

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.Name]: user => user.name.first,
      [SortBy.Last]: user => user.name.last,
      [SortBy.City]: user => user.location.country
    }

    return users.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }

  const sortedUsers: User[] = useMemo(() => {
    return sortUsers(filterUsers)
  }, [filterUsers, sorting])

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
        {loading && <strong>cargando...</strong>}
        {!loading && (
          <section className='flex justify-center items-center flex-col gap-8'>
            <Table
              users={sortedUsers}
              paintRows={togglePaint}
              onRemove={handleRemoveUser}
              onSortingByName={handleChangeSorting}
            />
            <button onClick={() => setCurrentPage(prevPage => prevPage + 1)} className='bg-cyan-600 p-2 rounded-md'>Cargar mas resultdos</button>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
