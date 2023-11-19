"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#606c38", // Main shade
      dark: "#283618", // Darker shade
    },
    secondary: {
      main: "rgba(221, 161, 94, 0.67)",
      light: "#FEFAE0",
      dark: "#BC6C25",
    },
    info: {
      main: "#fff",
      dark: "#D9D9D9",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
    },
    // ...other colors
  },
});

export default theme;
