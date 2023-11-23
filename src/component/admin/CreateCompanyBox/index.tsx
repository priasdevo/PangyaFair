'use client'
import React, { useEffect, useState } from 'react'
import { CreateCompanyContainer } from './styled'
import { FormControl, Typography } from '@mui/material'
import TextField from '@/component/common/TextField'
import useCreateCompany from '@/hooks/useCreateCompany'
import ApplyButton from '@/component/common/ApplyButton'

const CreateCompanyBox = (props: { getAllCompany: () => {} }) => {
  const { getAllCompany } = props
  const { handleFormSubmit, success } = useCreateCompany()

  useEffect(() => {
    if (success) {
      getAllCompany()
    }
  }, [success])

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    business: '',
    province: '',
    postalcode: '',
    tel: '',
    picture: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  // Modified submit handler
  const handleFormSubmitM = (e) => {
    e.preventDefault()
    handleFormSubmit(formData) // Assuming handleSubmit can take formData as argument
  }

  const fields = [
    { label: 'Company Name', name: 'name' },
    { label: 'Business', name: 'business' },
    { label: 'Address', name: 'address' },
    { label: 'Province', name: 'province' },
    { label: 'Postal Code', name: 'postalcode' },
    { label: 'Telephone No', name: 'tel' },
    { label: 'Picture Link', name: 'picture' },
  ]

  return (
    <CreateCompanyContainer>
      <Typography variant="h6" sx={{ alignSelf: 'center' }}>
        New Company
      </Typography>
      <FormControl
        onSubmit={handleFormSubmitM}
        sx={{ display: 'flex', gap: '8px' }}
      >
        {fields.map((field, index) => (
          <div key={index}>
            <label>{field.label} :</label>
            <TextField
              sx={{ background: '#D9D9D9', marginTop: '6px' }}
              variant="outlined"
              className="field"
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <ApplyButton
          onClick={(e) => {
            handleFormSubmitM(e)
          }}
        >
          CREATE
        </ApplyButton>
      </FormControl>
    </CreateCompanyContainer>
  )
}

export default CreateCompanyBox
