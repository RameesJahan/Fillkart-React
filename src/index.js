import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import App from './App';
import Login from './pages/Signin/Signin';
import Register from './pages/Signin/Signup';
import Category from './pages/Category/Category';
import CatView from './pages/Category/CatView';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
import Product from './pages/ProductView/Product';
import NotFound from './pages/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="categories" element={<Category />} />
          <Route path="categories/:category" element={<CatView />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
