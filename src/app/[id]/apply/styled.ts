import { styled } from "@mui/material/styles";

export const ApplyPageContainer = styled("div")`
  display: flex;
  flex-direction: row;
  padding: 30px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BookingBox = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  width: 30vw;
`;

export const InterviewBookBox = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  width: 450px;
  padding: 30px;
  border-radius: 12px;
  ${({ theme }) => `
    background: ${theme.palette.secondary.main};
`}
`;

export const InterviewCreateBox = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  gap: 8px;
`;
