import { Suspense, lazy, useState } from 'react'
import { Category } from '../types'

interface MenuProps {
  categories: Category[]
}

const MenuLazy = lazy(() => import('./MenuSublevel'))

const Menu: React.FC<MenuProps> = ({ categories }) => {
  const [visibleSubmenu, setVisibleSubmenu] = useState(new Set<number>())

  const toggleSubMenu = (categoryId: number) => {
    setVisibleSubmenu(prevState => {
      const draft = new Set<number>(prevState)
      if (draft.has(categoryId)) {
        draft.delete(categoryId)
      } else draft.add(categoryId)
      return draft
    })
  }

  const handleToggleSubMenu = (categoryId: number) => () => toggleSubMenu(categoryId)

  return (
    <nav>
      <ul>
        {categories.map(category => (
          <li key={`category-id_${category.id}`}>
            <span onClick={handleToggleSubMenu(category.id)} style={{ color: '#09f', cursor: 'pointer' }}>{category.name}</span>
            {visibleSubmenu.has(category.id) && category.sublevels && (
              <Suspense>
                <MenuLazy sublevels={category.sublevels} />
              </Suspense>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu