import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import deck from './deck';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App deck={deck} />
  </StrictMode>
);
