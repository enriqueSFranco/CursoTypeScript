type ItemId = `${string}-${string}-${string}-${string}-${string}`

type Item = {
  id: ItemId
  text: string
  timestamp: number
}

export { ItemId, Item }