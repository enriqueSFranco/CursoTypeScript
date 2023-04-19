import Form from "./Form"

interface Props {
  onPaint: () => void
  onSortByCity: () => void
  onResetState: () => void
  setFilterCity: (value: string) => void
}

const Header: React.FC<Props> = ({ onPaint, onSortByCity, onResetState, setFilterCity }) => {
  return (
    <header className='h-16'>
      <nav className='h-16'>
        <ul className='flex items-center justify-between gap-8'>
          <li><button className='bg-blue-700 p-1 rounded-md' onClick={onPaint}>Colorea filas</button></li>
          <li><button className='bg-blue-700 p-1 rounded-md' onClick={onSortByCity}>Ordenar por país</button></li>
          <li><button className='bg-blue-700 p-1 rounded-md' onClick={onResetState}>Restaurar estado inicial</button></li>
          <li>
            <Form setFilterCity={setFilterCity} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header