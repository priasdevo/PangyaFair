"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IApiContext } from "./types";

const ApiContext = createContext<IApiContext>({} as IApiContext);

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    console.log("Prias api context token : ", token);
  }, [token]);

  const sendRequest = async (
    method: string,
    body: {},
    url: string,
    tags?: string[]
  ) => {
    let isToken = false;

    if (token) {
      isToken = true;
    }

    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          isToken ? token : localStorage.getItem("token")
        }`, // Include the token in the Authorization header
      },
      next: { tags: tags },
    };

    // Add body to options only for POST and PUT requests
    if (method === "POST" || method === "PUT") {
      options.body = JSON.stringify(body);
    }
    console.log("Prias options : ", options);
    const response = await fetch("http://localhost:5000" + url, options);

    return await response.json();
  };

  return (
    <ApiContext.Provider value={{ setToken, sendRequest, token }}>
      {children}
    </ApiContext.Provider>
  );
};
