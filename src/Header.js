import React from 'react'
import "./Header.css";

function Header() {
  return (
  <div className='header'>
    
    <div className="header__left"></div>
      <img className = "logo" src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-2019-1597680-1350125.png" alt="Logo" />
    <div className="header__middle"></div>
      
    <div className="header__right"></div>
      
  </div>
  );
}

export default Header;