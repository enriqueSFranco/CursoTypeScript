import { useMemo, useState } from 'react'
import { useUserRQ } from './hooks/useUsersRQ'
import { User, SortBy } from './types.d'
import Header from './components/Header'
import Table from './components/Table'
import Loader from './components/Loader'
import './App.css'

function App() {
  const { data, isLoading, hasNextPage, refetch, fetchNextPage } = useUserRQ()
  const [togglePaint, setTogglePaint] = useState<Boolean>(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.None)
  const [filterCity, setFilterCity] = useState<string | null>(null)

  function handlePaintRows(): void {
    setTogglePaint(!togglePaint)
  }
  function handleResetState() {
    refetch()
  }

  let users: User[] = data?.pages.flatMap(page => page.users) ?? []

  function handleSortByCity() {
    const sortingValue = sorting === SortBy.None
      ? SortBy.City : SortBy.None
    setSorting(sortingValue)
  }

  function handleChangeSorting(sort: SortBy) {
    console.log({ sort })
    setSorting(sort)
  }

  const filterUsers = useMemo(() => {
    return typeof filterCity === 'string'
      ? users.filter(user => user.location.country.toLocaleLowerCase().includes(filterCity?.toLowerCase()))
      : users
  }, [filterCity, users])

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
    const newUsers = [...users].filter(user => user.email.localeCompare(email))
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
        <section className='flex flex-col items-center justify-center gap-4'>
          {users.length > 0 && (
            <Table
              users={sortedUsers}
              paintRows={togglePaint}
              onRemove={handleRemoveUser}
              onSortingByName={handleChangeSorting}
            />

          )}
          <button
            className={`${!hasNextPage ? 'bg-slate-600  hover:bg-slate-700' : 'bg-blue-600 cursor-pointer hover:bg-blue-700'} p-2 rounded-md transition-colors duration-75 ease-in`}
            disabled={!hasNextPage ? true : false}
            onClick={() => fetchNextPage()}
          >
            Cargar mas resultados
          </button>
          {isLoading && <Loader />}
        </section>
      </main>
    </div>
  )
}

export default App
