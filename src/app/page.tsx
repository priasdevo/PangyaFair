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

export default function Home() {
  const { allCompany, getAllCompany } = useAllCompanyCard();
  const { isLogin, role, loading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!isLogin && !loading) {
      router.replace("/login");
    }
  }, [isLogin, loading]);
  const isAdmin = role === "admin";

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
                />
              );
            })}
        </CompanyCardContainer>
        {isAdmin && <CreateCompanyBox getAllCompany={getAllCompany} />}
      </ContentContainer>
    </HomeContainer>
  );
}
