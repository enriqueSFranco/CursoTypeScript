import { Link } from 'react-router-dom'
import { type Story as StoryType } from '../../share/types'
import { headerStory, storyContainer, sotryInfo } from './Story.css'

interface StoryProps {
  story: StoryType
}

const Story: React.FC<StoryProps> = ({ story }) => {
  const { by, score, title } = story
  return (
    <>
      <div className={storyContainer}>
        <header className={headerStory}>
          <Link to={`/article/${story.id}`}>{title}</Link>
          <Link to='/'>({by})</Link>
        </header>
        <div className={sotryInfo}>
          <span>{score}</span>
        </div>
      </div>
    </>
  )
}

export default Story