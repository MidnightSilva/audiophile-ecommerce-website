import {React, useContext } from 'react'
import hamburgerMenu from "../assets/icons/hamburgerMenu.svg"
import audiophile from "../assets/images/audiophileIcon.png";
import Modal from './modal';
import Cart from "../assets/icons/cart.svg";

import { AppContext } from '../context/AppContext';


const Nav = () => {

    const { tiggerModal, displayModal } =useContext(AppContext)

  return (
    <nav className="nav">
      <div>
        <img
          onClick={() => tiggerModal(!tiggerModal)}
           className="nav-icon"
          src={hamburgerMenu}
          alt="hamburger-menu"
        />
        <img className="nav-icon" src={audiophile} alt="audiophile-icon" />
        <img className="nav-icon" src={Cart} alt="cart-icon" />
      </div>
      {displayModal ? null : <Modal/>}
    </nav>
  );
}

export default Nav