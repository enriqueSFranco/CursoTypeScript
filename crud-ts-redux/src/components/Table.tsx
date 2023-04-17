import { useAppSelector } from '../hooks/store'
import { Table, TableBody } from '@tremor/react'
import CustomTableRow from './TableRow'
import CustomTableHead from './TableHead'
import { useUserActions } from '../hooks/useUserActions'

const CustomTable: React.FC = () => {
  const data = useAppSelector(state => state.users)
  const { handleDeleteUser, handleEditUser } = useUserActions()

  return (
    <Table className="mt-5">
      <CustomTableHead />
      <TableBody>
        {data.map(({ id, avatar, name, email, github }) => (
          <CustomTableRow
            key={id}
            avatar={avatar}
            name={name}
            email={email}
            github={github}
            onEdit={() => handleEditUser({ id, name, email, github })}
            onDelete={() => handleDeleteUser(id)}
          />
        ))}
      </TableBody>
    </Table>
  )
}

export default CustomTable