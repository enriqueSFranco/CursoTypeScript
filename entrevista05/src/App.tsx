import useSWR from 'swr'
import Header from './components/Header'
import Story from './components/Story'
import { getTopStories } from './services/stories'
import { type Story as StoryType } from './share/types'
import './App.css'


const App: React.FC = () => {
  const { data, error, isLoading } = useSWR('topStories', () => getTopStories({ page: 1, limit: 10 }))
  return (
    <>
      <Header />
      <main>
        <section>
          <ol>
            {data?.map(story => (
              <li key={`story-id-${story.id}`}>
                <Story story={story} />
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  )
}

export default App
