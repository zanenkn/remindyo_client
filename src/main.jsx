import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';
import App from './App.jsx'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : process.env.VITE_API_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
