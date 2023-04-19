import { type UserMin } from '../types'

interface Props extends UserMin {
  className: string
  paintRows: Boolean
  onRemove: () => void
}


const TableRow: React.FC<Props> = ({ name, location, picture, paintRows, className, onRemove }) => {
  return (
    <tr className={paintRows ? className : 'bg-transparent'}>
      <td className='border border-slate-300'><img className='rounded-full' src={picture.thumbnail} alt={`avatar-${name}`} /></td>
      <td className='border border-slate-300'>{name.first}</td>
      <td className='border border-slate-300'>{name.last}</td>
      <td className='border border-slate-300'>{location.country}</td>
      <td className='border border-slate-300'><button onClick={onRemove}>🗑️</button></td>
    </tr>
  )
}

export default TableRow