import React from 'react'
import "./footer.scss"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
        <div className="magic_spoon">
            <div className="heading">
                  <h1>MAGIC SPOON</h1>
            </div>
            <ul className='flinks'>
                <li>Terms of job</li>
                <li>Privacy Policy</li>
                <li>Accessibility policy</li>
                <li>FAQ</li>
                <li>Become an Affiliate</li>
                <li>Reviews</li>
                <li>Jobs</li>
                <li>Track Order</li>
                <li>Store Locator</li>
                <li>Terms Of Services</li>
                <li>Refound Policy</li>
                <li>For Creator</li>
            </ul>
            <div className="Contact_container">
                <button className='cta_contact'>CONTACT US</button>
                  <div className="icons">
                      <FaInstagram />
                      <FaFacebookF />
                      <FaTwitter />
                  </div>
                  
            </div>
            <div className="para">
                  © 2023 Magic Spoon
            </div>
        </div>
        <div className="subscribe_box">
              <h1>Don't miss the magic:</h1>
              <div className="subscrib">
                <input type="text" placeholder='Your email' />
                <button className='cta_subscribe'>SUBSCRIBE</button>
              </div>
        </div>
    </div>
  )
}

export default Footer
