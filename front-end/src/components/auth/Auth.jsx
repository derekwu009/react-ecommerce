import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  const login = (token) => setAccessToken(token);
  const logout = () => setAccessToken(null);

  return (
    <AuthContext value={{ login, logout, accessToken }}>{children}</AuthContext>
  );
};
