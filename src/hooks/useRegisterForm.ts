import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useSnackbar } from '@/context/snackbarContext'
import { useUser } from '@/context/userContext'
import { useApi } from '@/context/apiContext'

const useRegisterForm = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [tel, setTel] = useState('')
  const [password, setPassword] = useState('')

  const { displaySnackbar } = useSnackbar()
  const { setIsLogin, setEmail } = useUser()
  const { sendRequest } = useApi()
  const router = useRouter()
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const telPatter =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

  const handleSubmit = async () => {
    if (username.trim() === '') {
      displaySnackbar('Email is required', 'error')
      return
    }
    if (password.trim() === '') {
      displaySnackbar('Password is required', 'error')
      return
    }
    if (password.length < 6) {
      displaySnackbar("Password's length must be longer than 6", 'error')
      return
    }
    if (!emailPattern.test(username)) {
      displaySnackbar('Please use valid email', 'error')
      return
    }
    if (!telPatter.test(tel)) {
      displaySnackbar('Please use valid telephone numbee', 'error')
      return
    }

    try {
      const req = {
        name: name,
        email: username,
        tel: tel,
        password: password,
      }

      const data = await sendRequest('POST', req, '/api/v1/auth/register')

      if (!data.success) {
        displaySnackbar('This username is already taken', 'error')
      } else {
        router.push('/login')
        localStorage.setItem('token', data.token)
        setIsLogin(true)
        setEmail(username)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target.value)
  }

  return {
    username,
    password,
    name,
    tel,
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    handleNameChange,
    handleTelChange,
  }
}

export default useRegisterForm
