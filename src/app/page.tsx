"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/component/common/Header";
import CompanyCard from "@/component/common/CompanyCard";
import {
  CompanyCardContainer,
  ContentContainer,
  HomeContainer,
} from "./styled";
import useAllCompanyCard from "@/hooks/useAllCompanyCard";
import { useUser } from "@/context/userContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CreateCompanyBox from "@/component/admin/CreateCompanyBox";
import Modal from "@/component/common/Modal";
import { Typography, useTheme } from "@mui/material";

export default function Home() {
  const {
    allCompany,
    getAllCompany,
    isModalOpen,
    onDelClikcHandle,
    delted_name,
    onModalCancelHandle,
    onModalConfirmHandle,
  } = useAllCompanyCard();
  const { isLogin, role, loading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLogin && !loading) {
      router.replace("/login");
    }
  }, [isLogin, loading]);
  useEffect(() => {
    console.log("Prias allcompany : ", allCompany);
  }, [allCompany]);
  const isAdmin = role === "admin";
  const theme = useTheme();

  return (
    <HomeContainer>
      <Header />
      <ContentContainer>
        <CompanyCardContainer style={{ width: isAdmin ? "60vw" : "100%" }}>
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
                />
              );
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
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <button
            style={{
              backgroundColor: theme.palette.secondary.dark,
              color: theme.palette.text.secondary,
              padding: "10px 14px",
              borderRadius: "12px",
              boxShadow: "none",
              border: "none",
              minWidth: "121px",
              cursor: "pointer",
            }}
            onClick={onModalCancelHandle}
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.secondary,
              padding: "10px 14px",
              borderRadius: "12px",
              boxShadow: "none",
              border: "none",
              minWidth: "121px",
              cursor: "pointer",
            }}
            onClick={onModalConfirmHandle}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </HomeContainer>
  );
}
