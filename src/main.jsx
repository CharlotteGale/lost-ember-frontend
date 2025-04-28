import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/base/index.css'
import './assets/styles/base/typography.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
