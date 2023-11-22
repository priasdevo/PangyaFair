"use client";
import React, { useEffect } from "react";
import useCompanyDetails from "@/hooks/useCompanyDetails";
import { DetailsContainer, DetailsPageContainer, RightBox } from "./styled";
import { Typography, useTheme } from "@mui/material";
import Header from "@/component/common/Header";
import Link from "next/link";

const DetailsPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const { company, getCompany } = useCompanyDetails();
  const theme = useTheme();
  useEffect(() => {
    getCompany(id);
  }, [id]);
  return (
    <>
      <Header />
      <DetailsPageContainer>
        <img src={company?.picture} width={300} height={300} />
        <RightBox>
          <DetailsContainer>
            <Typography variant="subtitle1">name: {company?.name}</Typography>
            <Typography variant="subtitle1">
              business: {company?.business}
            </Typography>
            <Typography variant="subtitle1">
              address: {company?.address}
            </Typography>
            <Typography variant="subtitle1">tel: {company?.tel}</Typography>
          </DetailsContainer>
          <Link href={`/${company?.id}/apply`}>
            <button
              style={{
                backgroundColor: theme.palette.primary.dark,
                color: theme.palette.text.secondary,
                padding: "10px 14px",
                borderRadius: "12px",
                boxShadow: "none",
                border: "none",
                minWidth: "121px",
                alignSelf: "flex-start",
                cursor: "pointer",
                fontWeight: "bolder",
              }}
            >
              APPLY
            </button>
          </Link>
        </RightBox>
      </DetailsPageContainer>
    </>
  );
};

export default DetailsPage;
