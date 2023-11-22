import { Typography } from "@mui/material";
import { ActionBar, BookingCardContainer } from "./styled";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import dayjs from "dayjs";

interface BookingCardProps {
  name: string;
  date: Date;
  id: string;
}
const BookingCard = (props: BookingCardProps) => {
  const { name, date } = props;
  return (
    <BookingCardContainer>
      <Typography variant="h6">Company Name : {name}</Typography>
      <Typography variant="h6">
        Interview Date : {dayjs(date).format("DD-MM-YYYY")}
      </Typography>
      <ActionBar>
        <button style={{ borderRadius: "4px", height: "100%" }}>
          <BorderColorOutlinedIcon fontSize="medium" />
        </button>
        <button style={{ borderRadius: "4px", height: "100%" }}>
          <DeleteOutlineIcon fontSize="medium" />
        </button>
      </ActionBar>
    </BookingCardContainer>
  );
};

export default BookingCard;