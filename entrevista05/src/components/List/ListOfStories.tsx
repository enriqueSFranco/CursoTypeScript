import { type Story as StoryType } from '../../share/types.d'
import Placeholder from '../Placeholder'
import Story from '../Story'
import { listOfStories } from './ListOfStories.css'

interface ListOfStoriesProps {
  stories: StoryType[]
  isLoading: boolean
}

const ListOfStories: React.FC<ListOfStoriesProps> = ({ stories, isLoading }) => {
  if (isLoading) {
    return (
      <>
        <ul className={listOfStories}>
          {Array.from({ length: stories.length }, (_, index) => <li key={`placeholeder-id-${index}`}><Placeholder /></li>)}
        </ul>
      </>
    )
  }
  return (
    <>
      <ol className={listOfStories}>
        {stories?.map(story => (
          <li key={`story-id-${story.id}`}>
            <Story story={story} />
          </li>
        ))}
      </ol>
    </>
  )
}

export default ListOfStories
