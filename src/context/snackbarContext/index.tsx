'use client'
import { Alert, Snackbar } from '@mui/material'
import React, { createContext, useCallback, useContext, useState } from 'react'
import { ISnackbarContext, SnackbarType } from './types'

const SnackbarContext = createContext<ISnackbarContext>({} as ISnackbarContext)

export const useSnackbar = (): ISnackbarContext => useContext(SnackbarContext)

export const SnackbarProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false)
  const [duration, setDuration] = useState(3000)
  const [type, setType] = useState<SnackbarType>('success')

  const handleClose = useCallback(() => setShow(false), [])

  const displaySnackbar = useCallback(
    (message: string, type: SnackbarType, duration?: number) => {
      setMessage(message)
      setType(type)
      if (duration) setDuration(duration)
      setShow(true)
    },
    [],
  )

  return (
    <SnackbarContext.Provider value={{ displaySnackbar }}>
      {children}
      {show && (
        <Snackbar
          key={'Prias snackba'}
          open={show}
          autoHideDuration={duration}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={type}
            sx={{ width: '100%', maxWidth: '25vw', whiteSpace: 'pre-line' }}
          >
            {message}
          </Alert>
        </Snackbar>
      )}
    </SnackbarContext.Provider>
  )
}
