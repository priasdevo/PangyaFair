"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserContext } from "./types";
import { useApi } from "../apiContext";

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setToken, token } = useApi();

  useEffect(() => {
    const validateToken = async () => {
      console.log("Prias token : ", token);
      try {
        const res = await fetch("http://localhost:5000/api/v1/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          setEmail(data.data.username);
          setRole(data.data.role);
          setIsLogin(true);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };

    if (token) validateToken();
    else {
      const nToken = localStorage.getItem("token");
      if (nToken) {
        setToken(nToken);
      } else {
        setLoading(false);
      }
    }
  }, [token]);

  const logout = () => {
    setToken("");
    localStorage.removeItem("token");
    setEmail("");
    setIsLogin(false);
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        isLogin,
        setIsLogin,
        logout,
        role,
        setRole,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
