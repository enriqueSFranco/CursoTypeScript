import { useMemo, useState } from "react"
import { Item, ItemId } from "../share/types.d"

// TODO: Implementar el patrón de diseño con reducer
export const useItems = () => {
  const [items, updateItems] = useState<Item[]>([])
  const totalItems = useMemo(() => items.length, [items.length])


  function addItem (text: string) {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now()
    }
    updateItems(prevItems => [...prevItems, newItem])
  }

  const deleteItem = (id: ItemId) => () => {
    updateItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== id)
      return updatedItems
    })
  }

  return { items, totalItems, addItem, deleteItem }
}