import { useState } from 'react'
import LayoutFilters from '@/layouts/Filters'
import { Filters } from '@/types'

interface Props {
  onChange: (filter: Filters) => void
}

const Rating: React.FC<Props> = ({ onChange }) => {
  const [selected, setSelected] = useState<Set<number>>(() => new Set())

  const handleChange = (rating: number, isChecked: boolean) => {
    const draft = structuredClone(selected)
    isChecked ? draft.add(rating) : draft.delete(rating)
    setSelected(draft)
    onChange(draft.size ? product => draft.has(product.rating) : null)
  }
  return (
    <LayoutFilters>
      <h3 className='text-xl font-bold'>Raiting</h3>
      <ul className='flex flex-col gap-3'>
        {[1, 2, 3, 4, 5].map((star) => (
          <li key={`star-id_${String(star)}`}>
            <label>
              <input type="checkbox" value={String(star)} onChange={(e) => handleChange(star, e.target.checked)} />
              <span>⭐️</span>
            </label>
          </li>
        ))}
      </ul>
    </LayoutFilters>
  )
}

export default Rating