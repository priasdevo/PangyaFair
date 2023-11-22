'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/component/common/Header'
import CompanyCard from '@/component/common/CompanyCard'
import {
  CompanyCardContainer,
  ContentContainer,
  HomeContainer,
  ModalButton,
} from './styled'
import useAllCompanyCard from '@/hooks/useAllCompanyCard'
import { useUser } from '@/context/userContext'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import CreateCompanyBox from '@/component/admin/CreateCompanyBox'
import Modal from '@/component/common/Modal'
import { FormControl, Typography, useTheme } from '@mui/material'
import useCompanyEdit from '@/hooks/useCompanyEdit'
import TextField from '@/component/common/TextField'
import ApplyButton from '@/component/common/ApplyButton'

export default function Home() {
  const {
    allCompany,
    getAllCompany,
    isModalOpen,
    onDelClikcHandle,
    delted_name,
    onModalCancelHandle,
    onModalConfirmHandle,
  } = useAllCompanyCard()
  const { isLogin, role, loading } = useUser()
  const router = useRouter()
  const {
    formDataEdit,
    handleChangeEdit,
    handleFormSubmitEdit,
    handleSelcteId,
    success,
    handleCancel,
    isOpen,
    fromDataFields,
  } = useCompanyEdit()

  useEffect(() => {
    if (!isLogin && !loading) {
      router.replace('/login')
    }
  }, [isLogin, loading])
  useEffect(() => {
    console.log('Prias allcompany : ', allCompany)
  }, [allCompany])
  useEffect(() => {
    if (success) {
      getAllCompany()
    }
  }, [success])
  const isAdmin = role === 'admin'
  const theme = useTheme()

  return (
    <HomeContainer>
      <Header />
      <ContentContainer>
        <CompanyCardContainer style={{ width: isAdmin ? '60vw' : '100%' }}>
          {allCompany &&
            allCompany.length !== 0 &&
            allCompany.map((company, index) => {
              return (
                <CompanyCard
                  key={company.id}
                  isAdmin={isAdmin}
                  companyName={company.name}
                  companyImage={company.picture}
                  companyId={company.id}
                  onDeleteClick={onDelClikcHandle}
                  onEditClick={handleSelcteId}
                />
              )
            })}
        </CompanyCardContainer>
        {isAdmin && <CreateCompanyBox getAllCompany={getAllCompany} />}
      </ContentContainer>
      <Modal isOpen={isModalOpen}>
        <Typography variant="h4">
          Are you sure to delete : {delted_name}
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <ModalButton
            style={{
              backgroundColor: theme.palette.secondary.dark,
              color: theme.palette.text.secondary,
            }}
            onClick={onModalCancelHandle}
          >
            Cancel
          </ModalButton>
          <ModalButton
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.secondary,
            }}
            onClick={onModalConfirmHandle}
          >
            Confirm
          </ModalButton>
        </div>
      </Modal>
      <Modal isOpen={isOpen}>
        <FormControl
          onSubmit={handleFormSubmitEdit}
          sx={{ display: 'flex', gap: '8px' }}
        >
          {fromDataFields.map((field, index) => (
            <div key={index}>
              <label>{field.label} :</label>
              <TextField
                sx={{ background: '#D9D9D9', marginTop: '6px' }}
                variant="outlined"
                className="field"
                name={field.name}
                value={formDataEdit[field.name]}
                onChange={handleChangeEdit}
              />
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8px',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <ApplyButton
              color="#BC6C25"
              onClick={(e) => {
                e.preventDefault()
                handleCancel()
              }}
            >
              Cancel
            </ApplyButton>
            <ApplyButton
              onClick={(e) => {
                e.preventDefault()
                handleFormSubmitEdit()
              }}
            >
              Edit
            </ApplyButton>
          </div>
        </FormControl>
      </Modal>
    </HomeContainer>
  )
}
