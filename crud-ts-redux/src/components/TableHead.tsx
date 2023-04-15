import {
  TableHead,
  TableRow,
  TableHeaderCell
} from '@tremor/react'

const CustomTableHead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableHeaderCell>Avatar</TableHeaderCell>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Email</TableHeaderCell>
        <TableHeaderCell>Githib</TableHeaderCell>
        <TableHeaderCell>Actions</TableHeaderCell>
      </TableRow>
    </TableHead>
  )
}

export default CustomTableHead