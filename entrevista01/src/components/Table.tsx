import { User } from '../types'
import TableRow from './TableRow'

interface Props {
  users: User[]
  paintRows: Boolean
  onRemove: (email: string) => void
}

const Table: React.FC<Props> = ({ users, paintRows, onRemove }) => {
  return (
    <table className='w-full table-auto border border-collapse border-slate-400'>
      <thead>
        <tr>
          <th className='border border-slate-30'>Foto</th>
          <th className='border border-slate-300'>Nombre</th>
          <th className='border border-slate-300'>Apellido</th>
          <th className='border border-slate-300'>Pais</th>
          <th className='border border-slate-300'>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, email, location, picture }, index) => {
          const bg = index % 2 === 0
          const className = bg ? ' bg-slate-100 text-black' : ' bg-slate-200 text-black'
          return (
            <TableRow
              key={`user-id_${email}`}
              name={name}
              location={location}
              picture={picture}
              paintRows={paintRows}
              className={className}
              onRemove={() => onRemove(email)}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default Table