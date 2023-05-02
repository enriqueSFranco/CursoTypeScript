import { useMemo, useState } from 'react'
import type { Product, Filters } from '@/types'
import LayoutFilters from '@/layouts/Filters'

interface Props {
  products: Product[],
  onChange: (filter: Filters) => void
}

const Color: React.FC<Props> = ({ products, onChange }) => {
  const [selected, setSelected] = useState<Set<string>>(() => new Set())

  return (
    <LayoutFilters>
      <ul className='flex flex-col-reverse gap-3'>
        <h3 className='text-xl font-bold'>Colors</h3>
      </ul>
    </LayoutFilters>
  )
}

export default Color