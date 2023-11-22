import { styled } from "@mui/material/styles";

export const DetailsPageContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 45px;
  gap: 10vw;
`;

export const DetailsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 30vw;
  padding: 30px;
`;

export const RightBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 10vh;
`;
