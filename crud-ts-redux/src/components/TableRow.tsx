import { TableRow, TableCell } from '@tremor/react'
import Avatar from './Avatar'

interface Props {
  avatar: string
  name: string
  email: string
  github: string
  onDelete: () => void
}

const CustomTableRow: React.FC<Props> = ({ avatar, name, email, github, onDelete }) => {
  return (
    <TableRow>
      <TableCell>
        <Avatar avatar={avatar} name={name} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{github}</TableCell>
      <TableCell className='flex gap-4'>
        <button>✍🏼</button>
        <button onClick={onDelete}>🗑️</button>
      </TableCell>
    </TableRow>
  )
}

export default CustomTableRow