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
    name,
    tel,
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
    handleNameChange,
    handleTelChange,
  } = useRegisterForm();

  return (
    <RegisterPageContainer>
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
          Register
        </Typography>
        <TextField
          label="Name"
          variant="outlined"
          className="field"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          className="field"
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          label="Tel"
          variant="outlined"
          className="field"
          value={tel}
          onChange={handleTelChange}
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
          Register
        </Button>
        <Typography sx={{ color: "rgba(0, 0, 0, 0.60)" }}>
          Already have account?{" "}
          <Link href={"/login"} style={{ textDecoration: "underline" }}>
            Login
          </Link>
        </Typography>
      </div>
      <div></div>
    </RegisterPageContainer>
  );
};

export default RegisterPage;
