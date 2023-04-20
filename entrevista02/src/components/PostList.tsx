import PostItem from './Post'
import type { Post } from '../type'

interface Props {
  posts: Post[]
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul className='flex flex-col items-center gap-4'>
      {posts.map(post => (
        <li key={`post-id_${post.id}`} className='w-96'>
          <PostItem title={post.title} description={post.body} />
        </li>
      ))}
    </ul>
  )
}

export default PostList