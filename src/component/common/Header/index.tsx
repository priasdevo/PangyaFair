'use client'
import React, { useEffect } from 'react'
import { Toolbar, Typography } from '@mui/material'
import { SignInButton, StyledAppBar, Title } from './styled'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/userContext'
import Link from 'next/link'

const Header = () => {
  const { isLogin, loading, logout, email } = useUser()
  const router = useRouter()
  useEffect(() => {
    if (!isLogin && !loading) {
      router.replace('/login')
    }
  }, [isLogin, loading])

  const handleButtonClick = () => {
    if (isLogin) {
      logout()
    } else {
      router.push('/login')
    }
  }

  const buttonText = isLogin ? 'Sign Out' : 'Sign In'
  return (
    <StyledAppBar position="static">
      <Toolbar
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <a href="/">
            <img src="/logo.png" width={45} height={45} />
          </a>
          {isLogin && (
            <Link href={'/apply'}>
              <Typography
                variant="h6"
                sx={{ color: 'black', textDecoration: 'underline' }}
              >
                {'Apply for Interview'}
              </Typography>
            </Link>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {isLogin && (
            <Typography variant="h6" sx={{ color: 'black' }}>
              {email}
            </Typography>
          )}
          <SignInButton onClick={handleButtonClick}>
            {buttonText} {isLogin ? <LogoutIcon /> : <LoginIcon />}
          </SignInButton>
        </div>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header
