import { useAppSelector } from '../hooks/store'
import { Table, TableBody } from '@tremor/react'
import CustomTableRow from './TableRow'
import CustomTableHead from './TableHead'

const CustomTable: React.FC = () => {
  const data = useAppSelector(state => state.users)

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
          />
        ))}
      </TableBody>
    </Table>
  )
}

export default CustomTable