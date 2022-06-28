import { React, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Productcard = (props) => {
  const { tiggerModal } = useContext(AppContext);
  return (
    <div className="productCardBackground">
      <h6 className="product-name" onClick={() => tiggerModal(!tiggerModal)}>
        {props.product}
      </h6>
      <div className="btn">
        <p className="btn-title" onClick={() => tiggerModal(!tiggerModal)}>
          {props.btnTitle}
        </p>
      </div>
    </div>
  );
};

export default Productcard;
