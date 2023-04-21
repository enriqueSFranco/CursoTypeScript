interface Props {
  title: string
  description: string
}

const Post: React.FC<Props> = ({ title, description }) => {
  return (
    <article className='h-full outline outline-1 outline-blue-200 rounded-sm flex flex-col justify-between items-start p-4'>
      <h2 className='capitalize font-bold text-cyan-400'>{title}</h2>
      <p className='capitalize text-white'>{description}</p>
    </article>
  )
}

export default Post