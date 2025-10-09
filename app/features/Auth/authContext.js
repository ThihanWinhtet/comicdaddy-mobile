import React, { createContext, useContext, useState, useEffect } from "react";
import { loginApi, registerApi } from "./api";
import { saveTokens, clearTokens, getAccessToken } from "../../utils/storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await loginApi({ email, password });
      const { accessToken, refreshToken, user: userData } = res.data.data;

      // Save tokens securely
      await saveTokens(accessToken, refreshToken);
      setUser(userData);
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
    }
  };

  // Register function
  const register = async (info) => {
    try {
      const res = await registerApi(info);
      const { accessToken, refreshToken, user: userData } = res.data;

      await saveTokens(accessToken, refreshToken);
      setUser(userData);
    } catch (err) {
      console.error("Register error:", err.response?.data || err.message);
      throw err;
    }
  };

  // Logout
  const logout = async () => {
    await clearTokens();
    setUser(null);
  };

  // Load user on app start
  const loadUser = async () => {
    try {
      const token = await getAccessToken();
      if (token) {
        // Optionally fetch user info from API
        // const res = await getUserApi();
        // setUser(res.data);
        setUser({}); // placeholder if you don’t want to fetch
      }
    } catch (err) {
      console.error("Load user error:", err);
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     loadUser();
  //   }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier access
export const useAuth = () => useContext(AuthContext);
