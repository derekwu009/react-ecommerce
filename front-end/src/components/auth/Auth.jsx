import { AuthContext } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (data) => {
    setAccessToken(data.accessToken);
    setUser(data.user);
  };

  const logout = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    setAccessToken(null);
    setUser(null);
  };

  useEffect(() => {
    const refreshUser = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/auth/refresh`,
          {
            method: "POST",
            credentials: "include",
          },
        );

        const data = await res.json();

        if (res.ok && data.accessToken) {
          const payload = JSON.parse(atob(data.accessToken.split(".")[1]));
          setUser({ id: payload.userId, user_name: payload.userName });
          setAccessToken(data.accessToken);
        }
      } catch (err) {
        console.error("Refresh failed: ", err);
        setUser(null);
        setAccessToken(null);
      } finally {
        setLoading(false);
      }
    };

    refreshUser();
  }, []);

  return (
    <AuthContext value={{ login, logout, accessToken, user, loading }}>
      {children}
    </AuthContext>
  );
};
