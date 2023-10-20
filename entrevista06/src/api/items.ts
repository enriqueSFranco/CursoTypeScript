import { Item } from "../share/types.d"

const ITEMS: Item[] = [
  { id: crypto.randomUUID(), text: 'Videojuegos 🎮', timestamp: Date.now() },
  { id: crypto.randomUUID(), text: 'Deportes 🏀', timestamp: Date.now() },
  { id: crypto.randomUUID(), text: 'Libros 📚', timestamp: Date.now() }
]

export { ITEMS }