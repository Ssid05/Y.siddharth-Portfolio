import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

// ═══════════════════════════════════════════════════════════════════════════════
// ENTRY POINT - Where the Universe Begins
// ═══════════════════════════════════════════════════════════════════════════════
// React 18+ with StrictMode for maximum stability

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
