import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import StorageService from "../services/storage.service"; // Adjust the import path as necessary

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Auto-sync from storage on mount
  useEffect(() => {
    const storedUser = StorageService.getData("user");
    const storedToken = StorageService.getData("token");
    if (storedUser && storedToken) {
      const parsedUser = typeof storedUser === 'string' ? JSON.parse(storedUser) : storedUser;
      console.log("my user logged")
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const login = useCallback((userData) => {
    setIsLoggedIn(true);
    setUser(userData.user);
    StorageService.setData("user", JSON.stringify(userData.user));
    StorageService.setData("token", userData.token);
  }, []);

  const updateUser = useCallback((userData) => {
    setUser(userData);
    StorageService.setData("user", JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUser(null);
    StorageService.clear();
  }, []);

  const hasRoles = (roles) => {
    const currentUser = StorageService.getData("user");
    if (!currentUser || !roles?.length) return false;
    const parsedUser = typeof currentUser === 'string' ? JSON.parse(currentUser) : currentUser;
    return roles.includes(parsedUser?.role);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, hasRoles, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);