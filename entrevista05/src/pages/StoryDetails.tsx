import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import { getItemInfo } from '../services/stories'
import comment from '../mocks/commentsResponse.json'

const { text } = comment

const StoryDetails: React.FC = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useSWR(`story/${id}`, () => getItemInfo({ id: parseInt(id!, 10) }))
  const { data: comments, error: err: isLoading: loading } = useSWR('', () => )
  console.log(data)

  if (isLoading) {
    return (
      <div>loading...</div>
    )
  }
  const { title } = data

  return (
    <section>
      <header>
        <h2>{title}</h2>
      </header>
      <article>
        <p>{text}</p>
        <ul>
          {comment.kids.map(kid => (
            <li>
              <p>{kid}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default StoryDetails