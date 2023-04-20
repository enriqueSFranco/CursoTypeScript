interface Props {
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-screen h-screen bg-slate-800'>
      {children}
    </div>
  )
}

export default AppLayout