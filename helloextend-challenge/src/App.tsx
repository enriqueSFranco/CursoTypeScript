import { useState } from 'react'
import { useBreeds } from './hooks/useBreeds'
import { uuid } from './utils/uuid'
import LayoutCards from './layout/LayoutCards'
import CardDog from './components/Card'
import Form from './components/Form'
import Skeleton from './components/Skeleton'
import './App.css'

const App: React.FC = () => {
  const [query, setQuery] = useState('akita')
  const [fav, setFav] = useState<string[]>([])
  const { breeds, loading } = useBreeds(query)

  function handleSearch(q: string): void {
    const currentQuery = q
    setQuery(currentQuery)
  }

  function handleFav(id: string): void {
    console.log('agregando a favorito', id)
    setFav([...fav, id])
  }

  return (
    <>
      <header>
        <h1 className='text-3xl font-bold uppercase'>dog breeds</h1>
      </header>
      <section className='w-full h-12'>
        <Form onChange={handleSearch} />
      </section>

      <main className='container mx-auto grid grid-cols-1 gap-4 px-4 divide-slate-300 divide-y'>
        <section>
          <LayoutCards>
            {loading && <Skeleton size={breeds.length} />}
            {breeds.length > 0 && breeds.map(image => (
              <li key={`image-id_${uuid()}`}>
                <CardDog image={image} onClick={handleFav} />
              </li>
            ))}
          </LayoutCards>
        </section>

        <section>
          <h2 className='uppercase text-xl font-bold text-left'>❤️ favoritos</h2>
          <LayoutCards>
            {fav.length === 0 && (<div>no hay favoritos</div>)}
            {fav.length > 0 && fav.map(image => (
              <li key={`image-id_${image}`}>
                <CardDog image={image} onClick={handleFav} />
              </li>
            ))}
          </LayoutCards>
        </section>
      </main>
    </>
  )
}

export default App
