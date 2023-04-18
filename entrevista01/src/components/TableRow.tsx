import { User } from '../types'

type UserMin = Pick<User, 'name' | 'location' | 'picture'>

const TableRow: React.FC<UserMin> = ({ name, location, picture }) => {
  return (
    <tr>
      <td><img className='rounded-full' src={picture.thumbnail} alt={`avatar-${name}`} /></td>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{location.city}</td>
      <td><button>Eliminar</button></td>
    </tr>
  )
}

export default TableRow