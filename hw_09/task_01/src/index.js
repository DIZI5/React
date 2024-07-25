import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './components/contexts/CartContext';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from './components/contexts/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Context>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Context>
    </ThemeContextProvider>
  </React.StrictMode>
);