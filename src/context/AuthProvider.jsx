import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.token ? true : false);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
