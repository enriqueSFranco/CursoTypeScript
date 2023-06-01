import useSWR from 'swr'
import Header from './components/Header'
import ListOfStories from './components/List/ListOfStories'
import { getTopStories } from './services/stories'
import './App.css'

const App: React.FC = () => {
  const { data, error, isLoading } = useSWR('topStories', () => getTopStories({ page: 1, limit: 10 }))
  return (
    <>
      <Header />
      <main>
        <section>
          <ListOfStories stories={data ?? []} isLoading={isLoading} />
        </section>
      </main>
    </>
  )
}

export default App
