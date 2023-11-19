"use client";
import React, { createContext, useContext, useState } from "react";
import { IApiContext } from "./types";

const ApiContext = createContext<IApiContext>({} as IApiContext);

export const useApi = () => useContext(ApiContext);

export const ApiProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [token, setToken] = useState("");

  const sendRequest = async (method: string, body: {}, url: string) => {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    };

    // Add body to options only for POST and PUT requests
    if (method === "POST" || method === "PUT") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch("http://localhost:5000" + url, options);

    return await response.json();
  };

  return (
    <ApiContext.Provider value={{ setToken, sendRequest, token }}>
      {children}
    </ApiContext.Provider>
  );
};
