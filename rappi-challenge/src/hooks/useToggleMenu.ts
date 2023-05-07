import { useState } from 'react'

export function useToggleMenu({ initialState = false }: { initialState: boolean }) {
  const [isVisibleSubmenu, setIsVisibleSubmenu] = useState(initialState)

  function toggleSubmenu() {
    setIsVisibleSubmenu(prevState => !prevState)
  }

  return { isVisibleSubmenu, toggleSubmenu }
}
