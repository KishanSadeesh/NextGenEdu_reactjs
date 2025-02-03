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
        <Link className='links' to="/products">Products</Link>
        <Link className='links'smooth to="#expertsol">Expert Solution</Link>
        <Link className='links' to="/Services">Services</Link>
        <Link className='links' to="/about">About</Link>
        <Link className='links' to="/contactus">Contact us</Link>
        <Link className='signin'to="Login">Login</Link>
        <Link className= 'signup'to="SignUp">SignUp</Link>
        </div>
    </div>
  )
}

export default Header;