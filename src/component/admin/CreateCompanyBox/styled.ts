import { styled } from "@mui/material/styles";

export const CreateCompanyContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 32px;
  gap: 8px;
  border-radius: 12px;
  width: 25vw;
  min-width: 300px;
  ${({ theme }) => `
    background: ${theme.palette.secondary.main};
  `}
`;
