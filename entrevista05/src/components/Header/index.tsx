import { Link } from 'react-router-dom'
import hackerNewsLogo from '/public/y18.svg'
import { navComponent, headerComponent } from './Header.css'

const Header: React.FC = () => {
  return (
    <header className={headerComponent}>
      <nav className={navComponent}>
        <img src={hackerNewsLogo} alt='logo hacker news' width={42} />
        <Link to='/'>haker news</Link>
      </nav>
    </header>
  )
}

export default Header
