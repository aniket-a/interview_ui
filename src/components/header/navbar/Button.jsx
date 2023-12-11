import React from 'react'
import headerlink from "../../../data/headerlink.json"
const Button = () => {
  return (
    <ul>
      {headerlink?.about?.map((item) => {
        return <li>{item.link}</li>;
      })}
    </ul>
  );
}

export default Button
