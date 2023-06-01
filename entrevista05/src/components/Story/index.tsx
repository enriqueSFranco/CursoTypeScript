import { Link } from 'react-router-dom'
import { type Story as StoryType } from '../../share/types.d'
import { headerStory, storyContainer, sotryInfo } from './Story.css'
import { timeAgo } from '../../helpers/time_ago'

interface StoryProps {
  story: StoryType
}

const getDomainFromURL = (url: string): string => {
  if (url === undefined) return ''
  try {
    const domain = new URL(url).hostname
    return domain
  } catch (error) {
    throw new Error(`Error al obtener el dominio de la URL ${url}`)
  }
}

const Story: React.FC<StoryProps> = ({ story }) => {
  const { by, descendants, score, title, url, time } = story
  console.log({ time })
  const formatTime = timeAgo({ timestamp: time })
  return (
    <>
      <div className={storyContainer}>
        <header className={headerStory}>
          <Link to={`/article/${story.id}`}>{title}</Link>
          <Link to={url}>{url === undefined ? '' : `(${getDomainFromURL(url)})`}</Link>
        </header>
        <div className={sotryInfo}>
          <span>{score} points by </span>
          <Link to='/'>{by}</Link>
          <span>{formatTime}</span>
          <span>|</span>
          <span>{descendants}</span>
        </div>
      </div>
    </>
  )
}

export default Story
