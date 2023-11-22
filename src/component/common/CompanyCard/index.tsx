import React from "react";
import { ActionBar, CompanyCardContainer } from "./styled";
import { Typography, useTheme } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";
interface cardProps {
  isAdmin: boolean;
  companyName: string;
  companyImage: string;
  companyId: string;
  onDeleteClick: (comp_id: string, comp_name: string) => void;
}

const CompanyCard = (props: cardProps) => {
  const { isAdmin, companyName, companyImage, companyId, onDeleteClick } =
    props;
  const theme = useTheme();
  return (
    <CompanyCardContainer>
      <img src={companyImage} width={180} height={180} />
      <Typography variant="h6" color={theme.palette.text.secondary}>
        {companyName}
      </Typography>
      <ActionBar>
        <Link href={`/${companyId}`}>
          <button
            style={{
              backgroundColor: theme.palette.primary.dark,
              color: theme.palette.text.secondary,
              padding: "10px 14px",
              borderRadius: "12px",
              boxShadow: "none",
              border: "none",
              minWidth: "121px",
              cursor: "pointer",
              fontWeight: "bolder",
            }}
          >
            APPLY
          </button>
        </Link>
        {isAdmin && (
          <ActionBar>
            <button style={{ borderRadius: "4px", height: "100%" }}>
              <BorderColorOutlinedIcon fontSize="medium" />
            </button>
            <button
              style={{ borderRadius: "4px", height: "100%" }}
              onClick={() => {
                onDeleteClick(companyId, companyName);
              }}
            >
              <DeleteOutlineIcon fontSize="medium" />
            </button>
          </ActionBar>
        )}
      </ActionBar>
    </CompanyCardContainer>
  );
};

export default CompanyCard;
