import { useMemo, useState } from 'react'
import { getProductsColors } from '@/utils/getProductsColors'
import type { Product, Filters } from '@/types'
import LayoutFilters from '@/layouts/Filters'

interface Props {
  products: Product[],
  onChange: (filter: Filters) => void
}

const Color: React.FC<Props> = ({ products, onChange }) => {
  const [selected, setSelected] = useState<Set<string>>(() => new Set())
  const colors = useMemo(() => getProductsColors(products), [products])

  const handleChange = (color: string, isChecked: boolean) => {
    const draft = structuredClone(selected)
    isChecked ? draft.add(color) : draft.delete(color)
    setSelected(draft)
    onChange(draft.size ? product => draft.has(product.color) : null)
  }

  return (
    <LayoutFilters>
      <ul className='flex flex-col gap-3'>
        <h3 className='text-xl font-bold'>Colors</h3>
        {colors.map(color => {
          let textColor = color === 'white' ? '#000' : color
          return (
            <li key={`color-id_${color}`}>
              <label htmlFor={color} className='flex gap-2'>
                <input
                  type='checkbox'
                  name={color}
                  id={color}
                  onChange={(e) => handleChange(color, e.target.checked)}
                  className={`w-4 h-4 bg-gray-100 border-gray-300 rounded-full`}
                />
                <span style={{ color: textColor, fontWeight: 700 }}>{color}</span>
              </label>
            </li>
          )
        })}
      </ul>
    </LayoutFilters>
  )
}

export default Color