import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Header.scss"

const Header = () => {
  return (
    <div className='header'>
    <h1>InsightfulMind.</h1>
    <nav>
      < Link to ="/">Home</Link>
      < Link to ="/about">About</Link>
      < Link to ="/contact">Contact</Link>
    </nav>
    </div>
  )
}

export default Header
