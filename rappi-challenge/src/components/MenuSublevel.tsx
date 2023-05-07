import { useToggleMenu } from '../hooks/useToggleMenu'
import { CategorySublevel } from '../types'

interface MenuSublevelProps {
  sublevels: CategorySublevel[]
}

const MenuSublevel: React.FC<MenuSublevelProps> = ({ sublevels }) => {
  const { isVisibleSubmenu, toggleSubmenu } = useToggleMenu({ initialState: false })

  return (
    <ul>
      {sublevels.map(sublevel => (
        <li key={`sublevel-id_${sublevel.id}`}>
          <span onClick={toggleSubmenu} style={{ color: '#09f', cursor: 'pointer' }}>{sublevel.name}</span>
          {isVisibleSubmenu && sublevel.sublevels && <MenuSublevel sublevels={sublevel.sublevels} />}
        </li>
      ))}
    </ul>
  )
}

export default MenuSublevel