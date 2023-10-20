import { useMemo, useState } from 'react'

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
  const totalItems = useMemo(() => items.length, [items.length])

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
    // MARK: Estrategia #1
    // const $form = e.target as HTMLFormElement
    // const formData = new FormData($form)
    // const field = formData.get('item') as string

    // if (!field.trim().length) return

    // addItem(field)
    // $form.reset()

    // MARK: Estrategia #2
    const { elements } = e.currentTarget
    const input = elements.namedItem('item')

    const isInput = input instanceof HTMLInputElement

    if (!isInput || input === null) return

    addItem(input.value)
    input.value = ''
  }

  function deleteItem (id: ItemId) {
    updateItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== id)
      return updatedItems
    })
  }

  return (
    <main>
      <section>
        <header>
          <h1>Entrevista técnica #6</h1>
        </header>
        <form className="add-item-form" onSubmit={handleSubmit}>
          <label htmlFor="item" className="label-item">
            <span>Item</span>
            <input type="text" name="item" placeholder="videojuegos" autoComplete="off" />
          </label>
          <button>Add Item</button>
        </form>
      </section>

      {/* TODO: LIST ITEMS */}
      <article className="content">
        <h2>Items: {totalItems}</h2>
        <ul className="item-list">
          {items.map(item => (
            <li key={`item-id-${item.id}`}><span onClick={() => deleteItem(item.id)}>{item.text}</span></li>
          ))}
        </ul>
      </article>
    </main>
  )
}