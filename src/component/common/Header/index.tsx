import React from "react";
import { Toolbar } from "@mui/material";
import { SignInButton, StyledAppBar, Title } from "./styled";

const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Title variant="h6">
          {/* Replace with your logo or text */}
          Your Logo Here
        </Title>
        <SignInButton>Sign In</SignInButton>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
