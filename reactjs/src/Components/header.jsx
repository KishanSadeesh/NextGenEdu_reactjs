import React from 'react'
import "./Header.css"
import logo from "../Assets/Logo.png"

import '../Components/Header.css'
import '../pages/Home'
import { HashLink as Link} from 'react-router-hash-link';

export const Header = () => {
  return (
    <div className='navbar'>
      <div className="leftside">
        <Link to="/">
        <img src={logo}/>
        </Link>
        
      </div>
      <div className="rightside">
        <Link className='links' to="/">Home</Link>
        <Link className='links' to="/AI TUTOR">AI TUTOR</Link>
        <Link className='links' to="/Course Material">Course Material</Link>
        <Link className='links' to="/Video material">Video material</Link>
        <Link className='links' to="/Accuracy and status">Accuracy and status</Link>
        <Link className='links' to="/contactus">Contact us</Link>
        <Link className='signin'to="Login">Login</Link>
        <Link className= 'signup'to="SignUp">SignUp</Link>
        </div>
    </div>
  )
}

export default Header;