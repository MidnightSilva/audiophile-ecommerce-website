import React from 'react'
import Productcard from './productcards'
// import audiophileData from "../audiophile.json"
// import headphones from "./"
// import speaker from "../assets/images/zx7Speaker.jpg"
// import earphones from "../assets/images/yx1WirelessEarphones.jpg"

const modal = (props) => {
        // const productTitle = audiophileData.map(( data )=>{
        //     return(<Productcard
        //     product={data.product}/>)
        // })  
        // let productName = audiophileData.map((productName) => {
        //   return productName.product.pop();
        // });
  return (
    <div className="background">
      <div className="modal">
        <Productcard/>
        {/* <img src={headphones}  alt="ss"/> */}
        {/* <Productcard title="red" productName="2" src={headphones} /> */}
        {/* {console.log(headphones)} */}
        {/* <Productcard title="green" prodcutName="3" src={headphones} /> */}
        {/* <Productcard title="orange" prodcutName="7" src={earphones} /> */}
      </div>
    </div>
  );
}

export default modal