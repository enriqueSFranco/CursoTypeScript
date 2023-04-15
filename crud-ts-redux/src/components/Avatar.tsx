interface Props {
  avatar: string,
  name: string
}

const Avatar: React.FC<Props> = ({ avatar, name }) => {
  return (
    <img
      src={avatar}
      alt={name}
      className='rounded-full w-16'
    />
  )
}

export default Avatar