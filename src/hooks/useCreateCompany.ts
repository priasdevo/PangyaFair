import { useApi } from '@/context/apiContext'
import { useSnackbar } from '@/context/snackbarContext'
import { useState } from 'react'

const useCreateCompany = () => {
  const [success, setSuccess] = useState(false)
  const { sendRequest } = useApi()
  const { displaySnackbar } = useSnackbar()

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
      if (!data.success) {
        // displaySnackbar(data.message, 'error')
        let message = ''
        if (data.message && data.message.errors) {
          const errors = data.message.errors

          for (const key in errors) {
            if (errors.hasOwnProperty(key)) {
              const error = errors[key]
              message = message + error.message + '\n'
            }
          }
        }
        displaySnackbar(message, 'error')
      }
      setSuccess(true)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormSubmit = (formData) => {
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
