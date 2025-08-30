// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './CartContext'; // <-- import here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>  {/* <-- Wrap your App */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
