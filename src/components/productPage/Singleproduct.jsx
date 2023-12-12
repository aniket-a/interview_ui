import React, { useContext, useState } from "react";
import "./singleproduct.scss";
import { dataContext } from "../../App";


const Singleproduct = ({ item }) => {
  const { Cart, addToCart } = useContext(dataContext); 

  const [isHover, setisHover] = useState(false);

  function handleMouseOver() {
    setisHover(true);
  }

  function handleMouseLeave() {
    setisHover(false);
  }

  const cartStyle = {
    backgroundColor: isHover ? item.background : "",
  };

  return (
    <div className="card" style={cartStyle}>
      <div className="img">
        <img className="offericone" src={item.offerIcon} alt="" />
        <img
          src={isHover ? item.hoverImage : item.defaultImage}
          alt="/"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseLeave}
        />
      </div>

      <div className="name" style={{ color: "#5B00ED" }}>
        {item.name}
      </div>
      <button className="cta_add" onClick={() => addToCart(item)}>
        ADD
      </button>
    </div>
  );
};

export default Singleproduct;
