import { User } from '../types'
import TableRow from './TableRow'

interface Props {
  users: User[]
}

const Table: React.FC<Props> = ({ users }) => {
  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Pais</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, email, location, picture }) => (
          <TableRow
            key={`user-id_${email}`}
            name={name}
            location={location}
            picture={picture}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Table