import { useState } from 'react'

type ItemId = `${string}-${string}-${string}-${string}-${string}`

type Item = {
  id: ItemId
  text: string
  timestamp: number
}

const ITEMS: Item[] = [
  { id: crypto.randomUUID(), text: 'Videojuegos 🎮', timestamp: Date.now() },
  { id: crypto.randomUUID(), text: 'Deportes 🏀', timestamp: Date.now() },
  { id: crypto.randomUUID(), text: 'Libros 📚', timestamp: Date.now() }
]

export function App () {
  const [items, updateItems] = useState<Item[]>(ITEMS)

  function addItem (text: string) {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now()
    }
    updateItems(prevItems => [...prevItems, newItem])
  }

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const $form = e.target as HTMLFormElement
    const formData = new FormData($form)
    const field = formData.get('item') as string

    if (!field.trim().length) return

    addItem(field)
    $form.reset()
  }

  function deleteItem (id: ItemId) {
    console.log('remove', id)
  }

  return (
    <main>
      <h1>Entrevista técnica #6</h1>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <label htmlFor="item" className="label-item">
          <span>Item</span>
          <input type="text" name="item" placeholder="videojuegos" />
        </label>
        <button>Add Item</button>
      </form>

      {/* TODO: LIST ITEMS */}
      <article className="container">
        <ul className="item-list">
          {items.map(item => (
            <li key={`item-id-${item.id}`}><span onClick={() => deleteItem(item.id)}>{item.text}</span></li>
          ))}
        </ul>
      </article>
    </main>
  )
}