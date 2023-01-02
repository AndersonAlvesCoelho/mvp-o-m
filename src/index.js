import React from 'react';
import ReactDOM from 'react-dom/client';

import { Toaster } from 'react-hot-toast';

import App from "./pages/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import "./assets/fontawesome/js/all.min.js"
import "./assets/css/theme.css"
import "react-widgets/styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>
);
