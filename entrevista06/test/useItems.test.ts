import { describe, test, expect } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useItems } from '../src/hooks/useItems'

describe('useItems hook', () => {
  test('should add and delete items', () => {
    const { result } = renderHook(() => useItems())

    expect(result.current.items.length).toBe(0)

    act(() => {
      result.current.addItem('comprar la despensa')
    })

    act(() => {
      result.current.addItem('ir a correr')
    })

    expect(result.current.items.length).toBe(2)

    act(() => {
      result.current.deleteItem(result.current.items[0].id)
    })

    expect(result.current.items.length).toBe(1)
  })
})