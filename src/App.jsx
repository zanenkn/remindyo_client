import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BirthdayList from '@components/BirthdayList';
import Login from '@components/Login';
import ProtectedRoute from '@components/ProtectedRoute';
import Register from '@components/Register';
import { AuthProvider } from '@context/AuthContext';
import { Toaster } from '@ui/toaster';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <BirthdayList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <Toaster />
    </AuthProvider>
  );
};

export default App;
