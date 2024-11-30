import axios from 'axios';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '@theme/provider.jsx';

axios.defaults.baseURL =
  import.meta.env.MODE === 'development' ? 'http://localhost:1337' : import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
