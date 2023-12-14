import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

import SearchBar from '../SearchBar/SearchBar';

import MenuIcon from "../../assets/icons/menu-bar.png";
import CartIcon from "../../assets/icons/shopping-cart.png";
import Logo from "../../assets/Fillkart-logo-light-croped.png";

function Header({onOpenMenu}) {
  
  const navigate = useNavigate();
  
  return (
    <header className="header">
      <div className="row">
        <div>
          <img onClick={() => onOpenMenu()} className="img-icon" src={MenuIcon} alt="Menu Bar Icon" />
        </div>
        <div>
          <img onClick={() => navigate('/')} className="header-logo" src={Logo} alt="Fillkart Logo" />
        </div>
        <div>
          <img onClick={() => navigate('/cart')} className="img-icon" src={CartIcon} alt="Cart Icon" />
        </div>
      </div>
      <div className="search-container">
        <SearchBar/>
      </div>
      <hr/>
    </header>
  )
}

export default Header;