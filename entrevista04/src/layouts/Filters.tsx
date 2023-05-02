interface Props {
  children: React.ReactNode
}

const LayoutFilters: React.FC<Props> = ({ children }) => {
  return (
    <div className='border border-slate-300 p-6 flex flex-col gap-3'>
      {children}
    </div>
  )
}

export default LayoutFilters