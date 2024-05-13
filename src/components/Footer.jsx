import React from 'react'
// import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

import "../styles/Footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
          <h2>Connect with Us</h2>
          <div className='socialIcons'>
                <a href="https://www.facebook.com"><FaFacebookSquare /> Facebook</a>
                <a href="https://twitter.com"><FaTwitterSquare /> Twitter</a>
                <a href="https://www.instagram.com"><FaInstagramSquare /> Instagram</a>
          </div>
    </div>
  )
}

export default Footer
