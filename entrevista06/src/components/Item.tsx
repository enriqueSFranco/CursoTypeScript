import { Item as ItemType } from "../share/types"

type ItemProps = {
  item: ItemType
  onDeleteItem: () => void
}

export const Item = ({ item, onDeleteItem }: ItemProps) => {
  return (
    <li>
      <span>{item.text}</span>
      <button onClick={onDeleteItem}></button>
    </li>
  )
}
