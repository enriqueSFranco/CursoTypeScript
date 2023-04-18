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
          <li><button onClick={onPaint}>Colorea filas</button></li>
          <li><button onClick={onSortByCity}>Ordenar por país</button></li>
          <li><button onClick={onResetState}>Restaurar estado inicial</button></li>
          <li>
            <Form setFilterCity={setFilterCity} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header