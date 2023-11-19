import React from "react";
import { ActionBar, CompanyCardContainer } from "./styled";
import { Typography, useTheme } from "@mui/material";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
interface cardProps {
  isAdmin: boolean;
  companyName: string;
  companyImage: string;
  companyId: string;
}

const CompanyCard = (props: cardProps) => {
  const { isAdmin, companyName, companyImage, companyId } = props;
  const theme = useTheme();
  return (
    <CompanyCardContainer>
      <img src={companyImage} width={180} height={180} />
      <Typography variant="h6" color={theme.palette.text.secondary}>
        {companyName}
      </Typography>
      <ActionBar>
        <button
          style={{
            backgroundColor: theme.palette.primary.dark,
            color: theme.palette.text.secondary,
            padding: "10px 14px",
            borderRadius: "12px",
            boxShadow: "none",
            border: "none",
            minWidth: "121px",
          }}
        >
          Apply
        </button>
        {isAdmin && (
          <ActionBar>
            <button style={{ borderRadius: "4px", height: "100%" }}>
              <BorderColorOutlinedIcon fontSize="medium" />
            </button>
            <button style={{ borderRadius: "4px", height: "100%" }}>
              <DeleteOutlineIcon fontSize="medium" />
            </button>
          </ActionBar>
        )}
      </ActionBar>
    </CompanyCardContainer>
  );
};

export default CompanyCard;