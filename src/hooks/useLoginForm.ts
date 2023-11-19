import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSnackbar } from "@/context/snackbarContext";
import { useUser } from "@/context/userContext";
import { useApi } from "@/context/apiContext";

const useLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { displaySnackbar } = useSnackbar();
  const { setIsLogin, setEmail } = useUser();
  const router = useRouter();
  const { setToken, sendRequest } = useApi();

  const handleSubmit = async () => {
    if (username.trim() === "") {
      displaySnackbar("Username is required", "error");
      return;
    }
    if (password.trim() === "") {
      displaySnackbar("Password is required", "error");
      return;
    }
    try {
      const req = {
        email: username,
        password: password,
      };

      // const res = await fetch(
      //   process.env["NEXT_PUBLIC_GATEWAY_URL"] + "/user/auth/login",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(req),
      //   }
      // );

      const data = await sendRequest("POST", req, "/api/v1/auth/login");

      if (!data.success) {
        displaySnackbar("login failed", "error");
      } else {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setIsLogin(true);
        setEmail(username);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return {
    username,
    password,
    handleSubmit,
    handleUsernameChange,
    handlePasswordChange,
  };
};

export default useLoginForm;
