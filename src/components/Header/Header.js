import React from 'react';
import style from '../Header/Header.module.css';
import SearchBar from '../searchbar/SearchBar';

function Header() {
  return (
    <header>
      <h3>Shopping</h3>
      <SearchBar />
      <nav className={style.nav}>
        <ul>
          <li>
            <a href="#notify">Notifications</a>
          </li>
          <li>
            <a href="#wish">MyWishlist</a>
          </li>
          <li>
            <a href="#cart">Cart</a>
          </li>
          <li>
            <a href="#account">Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
