"use client";
import React from "react";
import { LoginPageContainer } from "./styled";
import { Button, Typography } from "@mui/material";
import PasswordTextField from "@/component/common/PasswordField";
import TextField from "@/component/common/TextField";
import useLoginForm from "@/hooks/useLoginForm";
import Link from "next/link";

const LoginPage = () => {
  const {
    username,
    password,
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
  } = useLoginForm();

  return (
    <LoginPageContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "10vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: "600",
            marginRight: "15px",
          }}
        >
          Job Fair Interview Booking
        </Typography>
        <img src="logo.png" width={75} height={75} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "15vh",
          minWidth: "366px",
        }}
      >
        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: "600",
          }}
        >
          Log In
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          className="field"
          value={username}
          onChange={handleUsernameChange}
        />
        <PasswordTextField
          label="Password"
          variant="outlined"
          className="field"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: `${"primary"}.dark`,
            borderRadius: "12px",
            boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.20)",
            padding: "10px 14px",
          }}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Log In
        </Button>
        <Typography sx={{ color: "rgba(0, 0, 0, 0.60)" }}>
          Don’t have account?{" "}
          <Link href={"/register"} style={{ textDecoration: "underline" }}>
            Register
          </Link>
        </Typography>
      </div>
      <div></div>
    </LoginPageContainer>
  );
};

export default LoginPage;
