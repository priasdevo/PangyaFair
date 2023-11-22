import { styled } from '@mui/material/styles'

export const BookingCardContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  width: 100%;
  ${({ theme }) => `
    background: ${theme.palette.primary.main};
  `}
  color: white;
  border-radius: 8px;
`

export const ActionBar = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  width: 100%;
  height: 100%;
`

export const ActionButton = styled('button')`
  border-radius: 4px;
  height: 100%;
  border: none;
  padding: 4px;
  background: white;
`
