import React from 'react';
import ShoppingContext from '../store/shop-contxt';
import FrontPage from './frontpage/FrontPage';
import Header from './Header/Header';
import './app.module.css';
import Product from './singleProduct/Product';

function App() {
  return (
    <ShoppingContext>
      <Header />
      <FrontPage />
      <Product />
    </ShoppingContext>
  );
}

export default App;
