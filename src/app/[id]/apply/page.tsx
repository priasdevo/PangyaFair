"use client";
import Header from "@/component/common/Header";
import React, { useEffect } from "react";
import {
  ApplyPageContainer,
  BookingBox,
  InterviewBookBox,
  InterviewCreateBox,
} from "./styled";
import { MenuItem, Typography, useTheme } from "@mui/material";
import useBooking from "@/hooks/useBooking";
import TextField from "@/component/common/TextField";
import BookingCard from "@/component/booking/BookingCard";
import useAllCompanyCard from "@/hooks/useAllCompanyCard";
import { LocalizationProvider, DateField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Modal from "@/component/common/Modal";

const ApplyPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const {
    name,
    date,
    bookings,
    handleNameChange,
    handleDateChange,
    handleSubmit,
    delted_name,
    delted_date,
    handleDeleteClick,
    isModalOpen,
  } = useBooking(id);
  const { allCompany } = useAllCompanyCard();
  const theme = useTheme();

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header />
        <ApplyPageContainer>
          <BookingBox>
            <Typography variant="h4">Booking</Typography>
            {bookings &&
              bookings.map((booking, index) => {
                return (
                  <BookingCard
                    key={booking._id}
                    name={booking.company.name}
                    date={booking.bookingDate}
                    id={booking._id}
                    onDeleteClick={handleDeleteClick}
                  />
                );
              })}
          </BookingBox>
          {name && (
            <InterviewBookBox>
              <InterviewCreateBox>
                <Typography variant="h4" sx={{ alignSelf: "center" }}>
                  New Interview
                </Typography>
                <label>Company Name :</label>
                <TextField
                  sx={{ background: "#D9D9D9" }}
                  select
                  variant="outlined"
                  className="field"
                  value={name}
                  onChange={handleNameChange}
                >
                  {allCompany.map((nCompany, index) => {
                    return (
                      <MenuItem
                        key={`select ${nCompany.id}`}
                        value={nCompany.id}
                      >
                        {nCompany.name}
                      </MenuItem>
                    );
                  })}
                </TextField>
                <label>Interview Date :</label>
                <DateField
                  format="DD-MM-YYYY"
                  sx={{
                    background: "#D9D9D9",
                    borderRadius: "12px",
                    padding: 0,
                  }}
                  InputProps={{
                    sx: {
                      borderRadius: "12px",
                      backgroundColor: "#21212114",
                      "& ::-ms-reveal": {
                        display: "none",
                      },
                      "& ::-ms-clear": {
                        display: "none",
                      },
                      ".MuiInputBase-input.MuiOutlinedInput-input": {
                        padding: "8.5px 14px",
                      },
                      padding: 0,
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#000000",
                      padding: 0,
                    },
                  }}
                  disablePast
                  value={date!}
                  onChange={handleDateChange}
                />
              </InterviewCreateBox>

              <button
                style={{
                  backgroundColor: theme.palette.primary.dark,
                  color: theme.palette.text.secondary,
                  padding: "10px 14px",
                  borderRadius: "12px",
                  boxShadow: "none",
                  border: "none",
                  minWidth: "121px",
                  alignSelf: "center",
                  cursor: "pointer",
                  fontWeight: "bolder",
                }}
                onClick={handleSubmit}
                disabled={bookings.length === 3}
              >
                APPLY
              </button>
            </InterviewBookBox>
          )}
        </ApplyPageContainer>
        <Modal isOpen={isModalOpen}>
          <Typography variant="h4">
            Are you sure to delete booking at : {delted_name} on
            {delted_date?.toString()}
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <button
              style={{
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.text.secondary,
                padding: "10px 14px",
                borderRadius: "12px",
                boxShadow: "none",
                border: "none",
                minWidth: "121px",
                cursor: "pointer",
              }}
              // onClick={}
            >
              Cancel
            </button>
            <button
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.secondary,
                padding: "10px 14px",
                borderRadius: "12px",
                boxShadow: "none",
                border: "none",
                minWidth: "121px",
                cursor: "pointer",
              }}
              // onClick={}
            >
              Confirm
            </button>
          </div>
        </Modal>
      </LocalizationProvider>
    </>
  );
};

export default ApplyPage;
