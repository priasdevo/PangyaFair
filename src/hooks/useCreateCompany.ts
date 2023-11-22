import { useApi } from '@/context/apiContext'
import { useState } from 'react'

const useCreateCompany = () => {
  const [success, setSuccess] = useState(false)
  const { sendRequest } = useApi()

  const handleSubmit = async (
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
      const data = await sendRequest('POST', req, '/api/v1/companies')
      setSuccess(true)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormSubmit = (formData) => {
    console.log('Prias formData : ', formData)
    const { name, address, business, province, postalcode, tel, picture } =
      formData
    handleSubmit(name, address, business, province, postalcode, tel, picture)
  }

  return {
    handleFormSubmit,
    success,
  }
}

export default useCreateCompany
