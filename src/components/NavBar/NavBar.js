import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";


import AvatarImg from "../../assets/images/img_avatar.png";

const NavBar = ({ show, onClose }) => {
  const user = null;
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login");
    navigate('/auth/signin')
  };
  const handleHome = () => {
    console.log("Home");
  };
  const handleCat = () => {
    console.log("Catagory");
    navigate('/categories')
  };
  const handleCart = () => {
    console.log("Cart");
  };
  const handleWish = () => {
    console.log("Wishlist");
  };
  const handleAbout = () => {
    console.log("About");
  };
  const handleHelp = () => {
    console.log("Help");
  };
  const handleSettings = () => {
    console.log("Settings");
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
