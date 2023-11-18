import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)`
  ${({ theme }) => `
    background: ${theme.palette.secondary.main}; // Use theme here
    box-shadow: none;
    width: 100%;
  `}
`;
export const Title = styled(Typography)`
  ${({ theme }) => `
    flex:1;
    color: ${theme.palette.text.primary}
  `}
`;

export const SignInButton = styled(Button)`
  ${({ theme }) => `
    color: ${theme.palette.text.primary}
`}
`;
