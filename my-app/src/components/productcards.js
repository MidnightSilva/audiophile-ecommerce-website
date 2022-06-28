import React from 'react'
import headphones from "../assets/images/xx59HeadPhones.png";
import speaker from "../assets/images/zx7Speaker.png";
import earphones from "../assets/images/yx1WirelessEarPhones.png";
import Productcard from './Productcard';

import { Link } from "react-router-dom";


// come back and turn this into a custom component to include the img as well
const productcards = () => {
  return (
    <>
      <div className="product-card-continer">
        {" "}
        <img src={headphones} alt="product" className=" product-img" />
        <Link to="/Headphones">
          {" "}
          <Productcard product="Headphones" btnTitle="Shop" />
        </Link>
      </div>
      <div className="product-card-continer">
        <img src={speaker} alt="product" className=" product-img" />
        <Link to="/Speakers">
          {" "}
          <Productcard product="Speakers" btnTitle="Shop" />
        </Link>
      </div>
      <div className="product-card-continer">
        <img src={earphones} alt="product" className=" product-img" />
        <Link to="/Earphones">
          {" "}
          <Productcard product="Earphones" btnTitle="Shop" />
        </Link>
      </div>
    </>
  );
}

export default productcards