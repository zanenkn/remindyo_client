import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('/api/auth/me');
        setUser(response.data.userId);
      } catch (error) {
        console.error('Authentication failed', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        '/api/auth/login',
        { email, password }
      );
      setUser(response.data.userId)
      return response;
    } catch (err) {
      console.error("Login error", err.response?.data?.message || err);
      throw err;
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout');
      setUser(null);
    } catch (err) {
      console.error("Logout error", err.response?.data?.message || err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
