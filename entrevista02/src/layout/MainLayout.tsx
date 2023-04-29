interface Props {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex justify-between'>
      {children}
    </div>
  )
}

export default MainLayout