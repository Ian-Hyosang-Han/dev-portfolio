import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './router/AppRouter'
// Importing the CSS file
import './index.css';
import "./styles/normalize.css";
import Cursor from './components/ui/Cursor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cursor />
    <AppRouter />
  </StrictMode>
)
