import { styled } from "@mui/material/styles";

export const CompanyCardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 40px;
  gap: 8px;
  border-radius: 12px;
  ${({ theme }) => `
    background: ${theme.palette.primary.main};
  `}
`;

export const ActionBar = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 100%;
  height: 100%;
`;
