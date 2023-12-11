import React, { useContext } from 'react'
import "./header.scss"
import { dataContext } from '../../App'
import Navbar from './navbar/Navbar';

const Header = () => {
    const data = useContext(dataContext);
    
  return (
        <>
      <div className="offer_box">
        <ul>
          <li>✨ FREE Magic Stroon with $65+ Order✨</li>
          <li>🎁 FREE Cinnamon Roll box with $50+ Order 🎁</li>
        </ul>
      </div>

        <Navbar />
        </>
  );
}

export default Header
