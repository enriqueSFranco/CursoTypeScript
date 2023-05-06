import React from 'react'
import apiCategories from './api/categories.json'
import './App.css'
import type { CategorySublevel, Category } from './types'

const categories = apiCategories.categories

interface MenuProps {
  categories: Category[]
}

interface MenuSublevelProps {
  sublevels: CategorySublevel[]
}



const MenuSublevel: React.FC<MenuSublevelProps> = ({ sublevels }) => {
  return (
    <ul>
      {sublevels.map(sublevel => (
        <li key={`sublevel-id_${sublevel.id}`}>
          <span>{sublevel.name}</span>
          {sublevel.sublevels && <MenuSublevel sublevels={sublevel.sublevels} />}
        </li>
      ))}
    </ul>
  )
}

const Menu: React.FC<MenuProps> = ({ categories }) => {
  return (
    <nav>
      <ul>
        {categories.map(category => (
          <li key={`category-id_${category.id}`}>
            <span>{category.name}</span>
            {category.sublevels && <MenuSublevel sublevels={category.sublevels} />}
          </li>
        ))}
      </ul>
    </nav>
  )
}

function App() {

  return (
    <>
      <h1>Rappi Challenge</h1>
      <aside>
        <Menu categories={categories} />
      </aside>
    </>
  )
}

export default App
