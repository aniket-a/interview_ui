import React from 'react'
import "./gredient.scss"
const Gradient = () => {
  return (
    <div className="gradient_container">
      <div className="g_box">
        <img
          src="https://magicspoon.com/cdn/shop/files/product-nutrients-default-updated_1024x1024.jpg?v=1674089543"
          alt=""
        />
      </div>

      <div className="details">
        <div className="vitamines1">
          <div className="protine">
            <h1>HIGH PROTEIN</h1>
            <p>13g complete protein per serving</p>
          </div>
          <div className="protine">
            <h1>KETO-FRIENDLY</h1>
            <p>4g-5g net carbs per serving.</p>
          </div>
          <div className="protine">
            <h1>0G SUGAR</h1>
            <p>No cane sugar, corn syrup, or sugar alcohols.</p>
          </div>
        </div>
        <div className="vitamines1">
          <div className="protine">
            <h1>HIGH PROTEIN</h1>
            <p>13g complete protein per serving</p>
          </div>
          <div className="protine">
            <h1>KETO-FRIENDLY</h1>
            <p>4g-5g net carbs per serving.</p>
          </div>
          <div className="protine">
            <h1>0G SUGAR</h1>
            <p>No cane sugar, corn syrup, or sugar alcohols.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gradient
