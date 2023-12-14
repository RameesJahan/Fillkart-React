import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";


import AvatarImg from "../../assets/images/img_avatar.png";

const NavBar = ({ show, onClose }) => {
  const user = null;
  const navigate = useNavigate();

  const handleLogin = () => {
    onClose()
    navigate('/auth/signin')
  };
  const handleHome = () => {
    onClose()
    navigate('/')
  };
  const handleCat = () => {
    onClose()
    navigate('/categories')
  };
  const handleCart = () => {
    onClose()
    navigate('/cart')
  };
  const handleWish = () => {
    onClose()
    navigate('/wishlist')
  };
  const handleAbout = () => {
    onClose()
  };
  const handleHelp = () => {
    onClose()
  };
  const handleSettings = () => {
    onClose()
  };

  const navItems = [
    { name: "Login/Register", onclick: handleLogin },
    { name: "Home", onclick: handleHome },
    { name: "Catagory", onclick: handleCat },
    { name: "Cart", onclick: handleCart },
    { name: "Wishlist", onclick: handleWish },
    { name: "About", onclick: handleAbout },
    { name: "Help & Support", onclick: handleHelp },
    { name: "Settings", onclick: handleSettings },
  ];

  return (
    <div className={show ? "nav-container" : "nav-container hide"}>
      <div className="nav">
        <i className="nav-ic-close fa fa-xmark" onClick={() => onClose()} />
        <div className="nav-pro-wrapper">
          <img src={AvatarImg} alt="User" />
          {user ? (
            <div>
              <p>Name</p>
              <p>Email</p>
            </div>
          ) : (
            <p>Unknown</p>
          )}
        </div>
        <ul className="nav-items">
          {navItems.map((obj, i) => (
            <li key={i} className="nav-item">
              <p onClick={obj.onclick}>{obj.name}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
