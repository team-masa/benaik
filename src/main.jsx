import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import for the new React 18 API
import App from './App.jsx';
import './index.css';

// Create the root element using the new React 18 API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);