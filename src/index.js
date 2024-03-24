import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import "slick-carousel/slick/slick.css"; 
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router> {/* Wrap your App component with BrowserRouter */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
