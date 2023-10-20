import { Item as ItemType, ItemId } from "../share/types"

type ItemProps = {
  item: ItemType
  onDeleteItem: (id: ItemId) => () => void
}

export const Item = ({ item, onDeleteItem }: ItemProps) => {
  return (
    <li>
      <span>{item.text}</span>
      <button onClick={onDeleteItem(item.id)}></button>
    </li>
  )
}
