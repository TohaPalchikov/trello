import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import index from "./index.css"
import "bootstrap-icons/font/bootstrap-icons.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode className={index}>
    <App />
  </React.StrictMode>
);