import { Typography } from '@mui/material'
import { ActionBar, ActionButton, BookingCardContainer } from './styled'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import dayjs from 'dayjs'

interface BookingCardProps {
  name: string
  date: Date
  id: string
  onDeleteClick: (delId: string, delName: string, delDate: Date) => void
}
const BookingCard = (props: BookingCardProps) => {
  const { name, date, id, onDeleteClick } = props
  return (
    <BookingCardContainer>
      <Typography variant="h6">Company Name : {name}</Typography>
      <Typography variant="h6">
        Interview Date : {dayjs(date).format('DD-MM-YYYY')}
      </Typography>
      <ActionBar>
        <ActionButton>
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
