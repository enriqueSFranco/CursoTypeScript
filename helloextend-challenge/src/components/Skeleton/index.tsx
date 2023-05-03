interface Props {
  size: number
}

const Skeleton: React.FC<Props> = ({ size }) => {
  return (
    <>
      {
        Array.from({ length: size }, (_, i) => (
          <div role='status' key={`skeleton-id_${i}`} className='bg-gray-300 rounded-lg animate-pulse h-56 w-full' />
        ))
      }
    </>
  )
}

export default Skeleton
