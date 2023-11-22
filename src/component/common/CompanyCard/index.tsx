import React from 'react'
import { ActionBar, ActionButton, CompanyCardContainer } from './styled'
import { Typography, useTheme } from '@mui/material'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import Link from 'next/link'
import ApplyButton from '../ApplyButton'

interface cardProps {
  isAdmin: boolean
  companyName: string
  companyImage: string
  companyId: string
  onDeleteClick: (comp_id: string, comp_name: string) => void
  onEditClick: (id: string) => void
}

const CompanyCard = (props: cardProps) => {
  const {
    isAdmin,
    companyName,
    companyImage,
    companyId,
    onDeleteClick,
    onEditClick,
  } = props
  const theme = useTheme()
  return (
    <CompanyCardContainer>
      <img src={companyImage} width={180} height={180} />
      <Typography variant="h6" color={theme.palette.text.secondary}>
        {companyName}
      </Typography>
      <ActionBar>
        <Link href={`/${companyId}`}>
          <ApplyButton>APPLY</ApplyButton>
        </Link>
        {isAdmin && (
          <ActionBar>
            <ActionButton
              onClick={() => {
                onEditClick(companyId)
              }}
            >
              <BorderColorOutlinedIcon fontSize="medium" />
            </ActionButton>
            <ActionButton
              onClick={() => {
                onDeleteClick(companyId, companyName)
              }}
            >
              <DeleteOutlineIcon fontSize="medium" />
            </ActionButton>
          </ActionBar>
        )}
      </ActionBar>
    </CompanyCardContainer>
  )
}

export default CompanyCard
