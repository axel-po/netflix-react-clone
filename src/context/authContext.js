import { createContext, useContext } from "react";
import { useState } from "react";
// import { isAuthticated } from "../utils/clientApi";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [isAuth, setIsAuth] = useState(true);
  // const [isAuth, setIsAuth] = useState(isAuthticated());

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{props.children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth s'utilise avec AuthContext.Provider");
  }

  return context;
};
