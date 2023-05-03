interface Props {
  children: React.ReactNode
}

const LayoutCards: React.FC<Props> = ({ children }) => {
  return (
    <ul className='grid grid-cols-5 gap-3'>
      {children}
    </ul>
  )
}

export default LayoutCards
