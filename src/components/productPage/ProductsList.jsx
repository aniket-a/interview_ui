import React, { useState } from 'react';
import "./productpage.scss";
import productList from "../../data/productList.json";
import Singleproduct from './Singleproduct';

const Products = () => {
  const packs = ["4 pack", "6 pack"];
  const [tab, setTab] = useState(0);
  const [checkboxChange, setCheckboxChange] = useState(false);

  function handleTab(index) {
    setTab(index);
  }

  const mountain = tab === 1
    ? "https://magicspoon.com/cdn/shop/t/534/assets/MS_BYO_mountain.svg?v=150050071060029369861695836138"
    : "";

  const tree = tab === 1
    ? "https://magicspoon.com/cdn/shop/t/534/assets/MS_BYO_plant.svg?v=157064646514153285711695836139"
    : "";

  const imageUrl = tab
    ? "https://magicspoon.com/cdn/shop/t/534/assets/MS_BYO_6PACK_background.svg?v=85441753105695147711695836135"
    : "https://magicspoon.imgix.net/t/534/assets/MS_BYO_background.svg?v=163569969682011716421695836136&amp;auto=format,compress";

  const getBasePrice = () => {
    return tab === 0 ? 39 : 59;
  };

  const getDiscountedPrice = () => {
    return tab === 1 ? 49 : 29 ;
  };

  const handleCheckboxChange = () => {
    setCheckboxChange(!checkboxChange);
  };

  return (
    <div className="main_product_container">
      <div className="product_list">
        {productList.productListing.map((item, index) => (
          <div className="productListing_Box" key={index}>
            <Singleproduct
              item={item}
            />
          </div>
        ))}
      </div>
      <div className="cart_frame">
        <div className="img">
          <img src={imageUrl} alt="" />
          <img className="mountain" src={mountain} alt="" />
          <img className="tree" src={tree} alt="" />
        </div>
        <div className="build_box">
          <span>BUILD YOUR OWN BOX</span>
        </div>
        <div className="tab_container">
          <div className="tab_imag">
            <img
              src="https://cdn.shopify.com/s/files/1/1901/8741/files/save5.svg?v=1632943799"
              alt=""
            />
          </div>
          <div className="tab_packs">
            {packs.map((item, index) => (
              <span
                onClick={() => handleTab(index)}
                className={tab === index ? "active tab" : "tab"}
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="star_rating">
          <div className="review">
            <img
              src="data:image/svg+xml,%3Csvg width='1000' height='200' xmlns='http://www.w3.org/2000/svg' data-name='Layer 1'%3E%3Cdefs%3E%3ClinearGradient y2='1.00015' x2='0.5' y1='-0.00001' x1='0.5' id='linear-gradient'%3E%3Cstop stop-color='%23e30ba6' offset='0'/%3E%3Cstop stop-color='%235b00ed' offset='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg%3E%3Ctitle%3ELayer 1%3C/title%3E%3Cpath stroke='null' id='svg_1' fill='url(%23linear-gradient)' d='m134.86366,69.09331l54.44463,4.01705a8.2876,8.2876 0 0 1 4.76781,14.62517l-41.73048,35.16866a8.29735,8.29735 0 0 0 -2.70078,8.3071l13.0359,52.99186a8.29735,8.29735 0 0 1 -12.42164,9.0286l-46.39104,-28.77258a8.29735,8.29735 0 0 0 -8.7751,0l-46.35204,28.77258a8.29735,8.29735 0 0 1 -12.42164,-9.0286l13.0359,-52.99186a8.29735,8.29735 0 0 0 -2.70078,-8.3071l-41.73048,-35.16866a8.2876,8.2876 0 0 1 4.76781,-14.62517l54.82488,-4.01705a7.65384,7.65384 0 0 0 6.54233,-4.75806l20.76774,-50.90534a8.2876,8.2876 0 0 1 15.34668,0l20.60199,50.53484a8.27785,8.27785 0 0 0 7.08833,5.12856z' class='cls-1'/%3E%3Cpath stroke='null' id='svg_6' fill='url(%23linear-gradient)' d='m335.22696,69.09331l54.44463,4.01705a8.2876,8.2876 0 0 1 4.7678,14.62517l-41.73048,35.16866a8.29735,8.29735 0 0 0 -2.70078,8.30709l13.0359,52.99187a8.29735,8.29735 0 0 1 -12.42164,9.0286l-46.39104,-28.77258a8.29735,8.29735 0 0 0 -8.7751,0l-46.35204,28.77258a8.29735,8.29735 0 0 1 -12.42164,-9.0286l13.0359,-52.99187a8.29735,8.29735 0 0 0 -2.70078,-8.30709l-41.73049,-35.16866a8.2876,8.2876 0 0 1 4.76781,-14.62517l54.82488,-4.01705a7.65384,7.65384 0 0 0 6.54233,-4.75805l20.76774,-50.90534a8.2876,8.2876 0 0 1 15.34668,0l20.60199,50.53483a8.27785,8.27785 0 0 0 7.08833,5.12856z' class='cls-1'/%3E%3Cpath stroke='null' id='svg_7' fill='url(%23linear-gradient)' d='m536.176,69.09331l54.44463,4.01705a8.2876,8.2876 0 0 1 4.7678,14.62517l-41.73048,35.16866a8.29735,8.29735 0 0 0 -2.70078,8.30709l13.0359,52.99187a8.29735,8.29735 0 0 1 -12.42164,9.0286l-46.39104,-28.77258a8.29735,8.29735 0 0 0 -8.7751,0l-46.35204,28.77258a8.29735,8.29735 0 0 1 -12.42164,-9.0286l13.0359,-52.99187a8.29735,8.29735 0 0 0 -2.70078,-8.30709l-41.73049,-35.16866a8.2876,8.2876 0 0 1 4.76781,-14.62517l54.82488,-4.01705a7.65384,7.65384 0 0 0 6.54233,-4.75805l20.76774,-50.90534a8.2876,8.2876 0 0 1 15.34668,0l20.60199,50.53483a8.27785,8.27785 0 0 0 7.08833,5.12856z' class='cls-1'/%3E%3Cpath stroke='null' id='svg_8' fill='url(%23linear-gradient)' d='m736.12412,69.09331l54.44463,4.01705a8.2876,8.2876 0 0 1 4.7678,14.62517l-41.73048,35.16866a8.29735,8.29735 0 0 0 -2.70078,8.30709l13.0359,52.99187a8.29735,8.29735 0 0 1 -12.42164,9.0286l-46.39104,-28.77258a8.29735,8.29735 0 0 0 -8.7751,0l-46.35204,28.77258a8.29735,8.29735 0 0 1 -12.42164,-9.0286l13.0359,-52.99187a8.29735,8.29735 0 0 0 -2.70078,-8.30709l-41.73049,-35.16866a8.2876,8.2876 0 0 1 4.76781,-14.62517l54.82488,-4.01705a7.65384,7.65384 0 0 0 6.54233,-4.75805l20.76774,-50.90534a8.2876,8.2876 0 0 1 15.34668,0l20.60199,50.53483a8.27785,8.27785 0 0 0 7.08833,5.12856z' class='cls-1'/%3E%3Cpath stroke='null' id='svg_9' fill='url(%23linear-gradient)' d='m936.62794,69.09331l54.44463,4.01705a8.2876,8.2876 0 0 1 4.7678,14.62517l-41.73048,35.16866a8.29735,8.29735 0 0 0 -2.70078,8.30709l13.0359,52.99187a8.29735,8.29735 0 0 1 -12.42164,9.0286l-46.39104,-28.77258a8.29735,8.29735 0 0 0 -8.7751,0l-46.35204,28.77258a8.29735,8.29735 0 0 1 -12.42164,-9.0286l13.0359,-52.99187a8.29735,8.29735 0 0 0 -2.70078,-8.30709l-41.73049,-35.16866a8.2876,8.2876 0 0 1 4.76781,-14.62517l54.82488,-4.01705a7.65384,7.65384 0 0 0 6.54233,-4.75805l20.76774,-50.90534a8.2876,8.2876 0 0 1 15.34668,0l20.60199,50.53483a8.27785,8.27785 0 0 0 7.08833,5.12856z' class='cls-1'/%3E%3C/g%3E%3C/svg%3E"
              alt=""
            />
            <span>41680 reviews</span>
          </div>
        </div>
        <div className="price_list">
          <div className="base_pricing">
            ${checkboxChange ? getDiscountedPrice() : getBasePrice()}
          </div>
          <div className="pricing_div">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" onClick={handleCheckboxChange}>
              SUBSCRIBE & SAVE
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
