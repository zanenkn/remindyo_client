import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios';
import App from './App.jsx'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : process.env.REACT_APP_API_ENDPOINT;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
