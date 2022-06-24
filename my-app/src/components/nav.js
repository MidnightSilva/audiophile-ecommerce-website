import React from 'react'
import hamburgerMenu from "../assets/icons/hamburgerMenu.svg"
import audiophile from "../assets/images/audiophileIcon.png";
import Cart from "../assets/icons/cart.svg";


const nav = () => {
  return (
    <nav className='nav'>
      <img  src={hamburgerMenu} alt="hamburger-menu" />
      <img src={audiophile} alt="audiophile-icon" />
      <img src={Cart} alt="cart-icon"/>
    </nav>
  );
}

export default nav