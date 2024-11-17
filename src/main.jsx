import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';
import App from './App.jsx'

axios.defaults.baseURL =
  import.meta.env.MODE === 'development' ? 'http://localhost:1337' : import.meta.env.VITE_API_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
