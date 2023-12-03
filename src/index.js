import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Login from './pages/Signin/Signin';
import Register from './pages/Signin/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
