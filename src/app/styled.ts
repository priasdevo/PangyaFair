import { styled } from "@mui/material/styles";

export const HomeContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ContentContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
`;

export const CompanyCardContainer = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;