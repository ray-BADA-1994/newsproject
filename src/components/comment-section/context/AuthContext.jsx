/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const [newsTitle, setNewsTitle] = useState();

  return (
    <authContext.Provider value={{ token, setToken, setNewsTitle, newsTitle }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext);
};
