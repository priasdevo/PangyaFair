'use client'
import React, { useEffect } from 'react'
import { CreateCompanyContainer } from './styled'
import { Typography, useTheme } from '@mui/material'
import TextField from '@/component/common/TextField'
import useCreateCompany from '@/hooks/useCreateCompany'
import ApplyButton from '@/component/common/ApplyButton'

const CreateCompanyBox = (props: { getAllCompany: () => {} }) => {
  const { getAllCompany } = props
  const {
    name,
    address,
    business,
    province,
    postalcode,
    tel,
    picture,
    handleNameChange,
    handleAddressChange,
    handleBusinessChange,
    handlePictureChange,
    handlePostalcodeChange,
    handleTelChange,
    handleProvinceChange,
    handleSubmit,
    success,
  } = useCreateCompany()

  useEffect(() => {
    if (success) {
      getAllCompany()
    }
  }, [success])

  const theme = useTheme()
  return (
    <CreateCompanyContainer>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        New Company
      </Typography>
      <label>Company Name :</label>
      <TextField
        sx={{ background: '#D9D9D9' }}
        variant="outlined"
        className="field"
        value={name}
        onChange={handleNameChange}
      />
      <label>Business :</label>
      <TextField
        sx={{ background: '#D9D9D9' }}
        variant="outlined"
        className="field"
        value={business}
        onChange={handleBusinessChange}
      />
      <label>Address :</label>
      <TextField
        sx={{ background: '#D9D9D9' }}
        variant="outlined"
        className="field"
        value={address}
        onChange={handleAddressChange}
      />
      <label>Province :</label>
      <TextField
        sx={{ background: '#D9D9D9' }}
        variant="outlined"
        className="field"
        value={province}
        onChange={handleProvinceChange}
      />
      <label>Postal code :</label>
      <TextField
        sx={{ background: '#D9D9D9' }}
        variant="outlined"
        className="field"
        value={postalcode}
        onChange={handlePostalcodeChange}
      />
      <label>Telephone No :</label>
      <TextField
        sx={{ background: '#D9D9D9' }}
        variant="outlined"
        className="field"
        value={tel}
        onChange={handleTelChange}
      />
      <label>Picture Link :</label>
      <TextField
        sx={{ background: '#D9D9D9' }}
        variant="outlined"
        className="field"
        value={picture}
        onChange={handlePictureChange}
      />
      <ApplyButton onClick={handleSubmit}>CREATE</ApplyButton>
    </CreateCompanyContainer>
  )
}

export default CreateCompanyBox
