import { styled } from '@mui/material/styles'

export const HomeContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const ContentContainer = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 15px 30px;
`

export const CompanyCardContainer = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 45px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`

export const ModalButton = styled('button')`
  padding: 10px 14px;
  border-radius: 12px;
  box-shadow: none;
  border: none;
  min-width: 121px;
  cursor: pointer;
`
