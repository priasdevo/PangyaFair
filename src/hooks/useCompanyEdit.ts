'use client'

import { useApi } from '@/context/apiContext'
import { useEffect, useState } from 'react'
import useCompanyDetails from './useCompanyDetails'

const useCompanyEdit = () => {
  const [formDataEdit, setFormDataEdit] = useState({
    name: '',
    address: '',
    business: '',
    province: '',
    postalcode: '',
    tel: '',
    picture: '',
  })
  const [success, setSuccess] = useState(false)
  const [id, setId] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const { sendRequest } = useApi()
  const { company, getCompany } = useCompanyDetails()
  const fromDataFields = [
    { label: 'Company Name', name: 'name' },
    { label: 'Business', name: 'business' },
    { label: 'Address', name: 'address' },
    { label: 'Province', name: 'province' },
    { label: 'Postal Code', name: 'postalcode' },
    { label: 'Telephone No', name: 'tel' },
    { label: 'Picture Link', name: 'picture' },
  ]

  useEffect(() => {
    if (id) {
      getCompany(id)
    }
  }, [id])

  useEffect(() => {
    if (company) {
      setFormDataEdit({
        name: company.name || '',
        address: company.address || '',
        business: company.business || '',
        province: company.province || '', // Assuming you have a way to get 'province' from 'company'
        postalcode: company.postalcode || '', // Assuming you have a way to get 'postalcode' from 'company'
        tel: company.tel || '',
        picture: company.picture || '',
      })
      setIsOpen(true)
    }
  }, [company])

  const handleEdit = async (
    name: string,
    address: string,
    business: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
  ) => {
    const req = {
      name,
      address,
      business,
      province,
      postalcode,
      tel,
      picture,
    }
    try {
      setSuccess(false)
      const data = await sendRequest('PUT', req, '/api/v1/companies/' + id)
      setSuccess(true)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChangeEdit = (e) => {
    const { name, value } = e.target
    setFormDataEdit((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleFormSubmitEdit = () => {
    const { name, address, business, province, postalcode, tel, picture } =
      formDataEdit
    handleEdit(name, address, business, province, postalcode, tel, picture)
  }

  const handleSelcteId = (id: string) => {
    setId(id)
  }

  const handleCancel = () => {
    setId('')
    setIsOpen(false)
  }

  useEffect(() => {
    if (success) {
      handleCancel()
    }
  }, [success])

  return {
    formDataEdit,
    handleChangeEdit,
    handleFormSubmitEdit,
    handleSelcteId,
    handleCancel,
    isOpen,
    success,
    fromDataFields,
  }
}
export default useCompanyEdit
