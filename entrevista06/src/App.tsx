import { useMemo, useState } from 'react'
import { Item as ItemType, ItemId } from './share/types'
import { Item } from './components/Item'
// import { ITEMS } from './api/items'

export function App () {
  const [items, updateItems] = useState<ItemType[]>([])
  const totalItems = useMemo(() => items.length, [items.length])

  function addItem (text: string) {
    const newItem: ItemType = {
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

  const deleteItemHandler = (id: ItemId) => () => {
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
        <form className="add-item-form" onSubmit={handleSubmit} aria-label='Add new item form'>
          <label htmlFor="item" className="label-item">
            <span>Item</span>
            <input type="text" name="item" placeholder="videojuegos" autoComplete="off" />
          </label>
          <button>Add Item</button>
        </form>
      </section>

      {/* TODO: LIST ITEMS */}
      <article className="content">
        {totalItems === 0 ? (<h2>Empty List</h2>) : (
          <div>
            <strong>Items: {totalItems}</strong>
            <ul className="item-list">
              {items.map(item => (
                <Item
                  key={`item-id-${item.id}`}
                  item={item}
                  onDeleteItem={deleteItemHandler(item.id)}
                />
              ))}
            </ul>
          </div>
        )}
      </article>
    </main>
  )
}