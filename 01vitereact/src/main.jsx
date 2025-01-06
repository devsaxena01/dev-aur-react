import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import react from 'react'
//import ReactDOM from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
