import { TableRow, TableCell } from '@tremor/react'
import Avatar from './Avatar'
import { useFormActionType } from '../hooks/useFormActionType'

interface Props {
  avatar: string
  name: string
  email: string
  github: string
  onDelete: () => void
  onEdit: () => void
}

const CustomTableRow: React.FC<Props> = ({ avatar, name, email, github, onDelete, onEdit }) => {
  const { handleFormActionType } = useFormActionType()
  function handleEdit() {
    handleFormActionType('edit')
    onEdit()
  }

  return (
    <TableRow>
      <TableCell>
        <Avatar avatar={avatar} name={name} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{github}</TableCell>
      <TableCell className='flex gap-4'>
        <button onClick={handleEdit}>✍🏼</button>
        <button onClick={onDelete}>🗑️</button>
      </TableCell>
    </TableRow>
  )
}

export default CustomTableRow