import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BirthdayList from "./components/BirthdayList";
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';

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
    </AuthProvider>
  );
};

export default App;
