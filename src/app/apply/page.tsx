'use client'
import Header from '@/component/common/Header'
import React, { useEffect } from 'react'
import {
  ApplyPageContainer,
  BookingBox,
  InterviewBookBox,
  InterviewCreateBox,
  ModalButton,
} from './styled'
import { MenuItem, Typography, useTheme } from '@mui/material'
import useBooking from '@/hooks/useBooking'
import TextField from '@/component/common/TextField'
import BookingCard from '@/component/booking/BookingCard'
import useAllCompanyCard from '@/hooks/useAllCompanyCard'
import { LocalizationProvider, DateField } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Modal from '@/component/common/Modal'
import ApplyButton from '@/component/common/ApplyButton'
import dayjs from 'dayjs'
import { useUser } from '@/context/userContext'

const ApplyPage = () => {
  const id = false
  const {
    name,
    date,
    bookings,
    handleNameChange,
    handleDateChange,
    delted_name,
    delted_date,
    handleDeleteClick,
    isModalOpen,
    handleCancelModal,
    handleConfirmDelete,
    isModalOpen2,
    handleEditClick,
    handleCancelModal2,
    handleConfirmEdit,
    handleDelDateChange,
    handleSubmit,
  } = useBooking()
  const { role } = useUser()
  const { allCompany } = useAllCompanyCard()
  const theme = useTheme()

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
                    user={role === 'admin' ? booking.user.email : undefined}
                    onDeleteClick={handleDeleteClick}
                    onEditClick={handleEditClick}
                  />
                )
              })}
          </BookingBox>
          {(name || !id) && (
            <InterviewBookBox>
              <InterviewCreateBox>
                <Typography variant="h4" sx={{ alignSelf: 'center' }}>
                  New Interview
                </Typography>
                <label>Company Name :</label>
                <TextField
                  sx={{ background: '#D9D9D9' }}
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
                    )
                  })}
                </TextField>
                <label>Interview Date :</label>
                <DateField
                  format="DD/MM/YYYY"
                  sx={{
                    background: '#D9D9D9',
                    borderRadius: '12px',
                    padding: 0,
                  }}
                  InputProps={{
                    sx: {
                      borderRadius: '12px',
                      backgroundColor: '#21212114',
                      '& ::-ms-reveal': {
                        display: 'none',
                      },
                      '& ::-ms-clear': {
                        display: 'none',
                      },
                      '.MuiInputBase-input.MuiOutlinedInput-input': {
                        padding: '8.5px 14px',
                      },
                      padding: 0,
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: '#000000',
                      padding: 0,
                    },
                  }}
                  disablePast
                  value={date!}
                  onChange={handleDateChange}
                />
              </InterviewCreateBox>
              <ApplyButton
                onClick={handleSubmit}
                isDisabled={bookings.length >= 3 && role !== 'admin'}
              >
                APPLY
              </ApplyButton>
            </InterviewBookBox>
          )}
        </ApplyPageContainer>
        <Modal isOpen={isModalOpen}>
          <Typography variant="h5">
            Are you sure to delete booking at : {delted_name} on{' '}
            {dayjs(delted_date).format('DD/MM/YYYY')}
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            <ModalButton
              style={{
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.text.secondary,
              }}
              onClick={handleCancelModal}
            >
              Cancel
            </ModalButton>
            <ModalButton
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.secondary,
              }}
              onClick={handleConfirmDelete}
            >
              Confirm
            </ModalButton>
          </div>
        </Modal>

        <Modal isOpen={isModalOpen2}>
          <Typography variant="h5">
            Edit Booking Date at {delted_name}
          </Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <label>New Interview Date :</label>
            <DateField
              format="DD/MM/YYYY"
              sx={{
                background: '#D9D9D9',
                borderRadius: '12px',
                padding: 0,
              }}
              InputProps={{
                sx: {
                  borderRadius: '12px',
                  backgroundColor: '#21212114',
                  '& ::-ms-reveal': {
                    display: 'none',
                  },
                  '& ::-ms-clear': {
                    display: 'none',
                  },
                  '.MuiInputBase-input.MuiOutlinedInput-input': {
                    padding: '8.5px 14px',
                  },
                  padding: 0,
                },
              }}
              InputLabelProps={{
                sx: {
                  color: '#000000',
                  padding: 0,
                },
              }}
              disablePast
              value={dayjs(delted_date)}
              onChange={handleDelDateChange}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            <ModalButton
              style={{
                backgroundColor: theme.palette.secondary.dark,
                color: theme.palette.text.secondary,
              }}
              onClick={handleCancelModal2}
            >
              Cancel
            </ModalButton>
            <ModalButton
              style={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.secondary,
              }}
              onClick={handleConfirmEdit}
            >
              Confirm
            </ModalButton>
          </div>
        </Modal>
      </LocalizationProvider>
    </>
  )
}

export default ApplyPage
