import { Typography } from '@mui/material'
import { ActionBar, ActionButton, BookingCardContainer } from './styled'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import dayjs from 'dayjs'

interface BookingCardProps {
  name: string
  date: Date
  id: string
  user?: string
  onDeleteClick: (delId: string, delName: string, delDate: Date) => void
  onEditClick: (delId: string, delName: string, delDate: Date) => void
}
const BookingCard = (props: BookingCardProps) => {
  const { name, date, id, onDeleteClick, onEditClick, user } = props
  return (
    <BookingCardContainer>
      <Typography variant="h6">Company Name : {name}</Typography>
      <Typography variant="h6">
        Interview Date : {dayjs(date).format('DD/MM/YYYY')}
      </Typography>
      {user && <Typography variant="h6">User : {user}</Typography>}
      <ActionBar>
        <ActionButton onClick={() => onEditClick(id, name, date)}>
          <BorderColorOutlinedIcon fontSize="medium" />
        </ActionButton>
        <ActionButton onClick={() => onDeleteClick(id, name, date)}>
          <DeleteOutlineIcon fontSize="medium" />
        </ActionButton>
      </ActionBar>
    </BookingCardContainer>
  )
}

export default BookingCard
