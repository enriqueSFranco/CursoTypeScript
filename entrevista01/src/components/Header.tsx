const Header: React.FC = () => {
  return (
    <header className='h-16'>
      <nav className='h-16'>
        <ul className='flex items-center justify-between gap-8'>
          <li><button>Colorea filas</button></li>
          <li><button>Ordenar por país</button></li>
          <li><button>Restaurar estado inicial</button></li>
          <li><input type='text' name='' id='' placeholder='Filtrar por país' /></li>

        </ul>
      </nav>
    </header>
  )
}

export default Header