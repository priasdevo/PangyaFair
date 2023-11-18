"use client";
import React from "react";
import { RegisterPageContainer } from "./styled";
import { Button, Typography } from "@mui/material";
import PasswordTextField from "@/component/common/PasswordField";
import TextField from "@/component/common/TextField";
import Link from "next/link";
import useRegisterForm from "@/hooks/useRegisterForm";

const RegisterPage = () => {
  const {
    username,
    password,
    conFirmPassword,
    role,
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    handleConFirmPasswordChange,
    handleRoleChange,
  } = useRegisterForm();

  return (
    <RegisterPageContainer>
      <div>
        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: "600",
            marginTop: "10vh",
          }}
        >
          Job Fair Interview Booking
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20vh",
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
    </RegisterPageContainer>
  );
};

export default RegisterPage;
