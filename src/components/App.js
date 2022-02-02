import React from 'react';
import ShoppingContext from '../store/shop-contxt';
import FrontPage from './frontpage/FrontPage';
import Header from './Header/Header';
import Product from './singleProduct/Product';
import AdminPage from './adminDir/AdminPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.module.css';

function App() {
  return (
    <ShoppingContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </ShoppingContext>
  );
}

export default App;
