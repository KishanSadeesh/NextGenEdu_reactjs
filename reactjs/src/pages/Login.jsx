import React from 'react'
import '../Styles/style_login.css'
import { Link } from 'react-router-dom'
import logo from "../Assets/Logo.png"

function Login() {
  return (
    <div className="login">
      <div className="split left">
        <div className="center">
        <Link to="/">
          <img src={logo} />
        </Link>
        </div>  
      </div>

      <div className="split right">
        <div className="wrapper">
          <form action="">
            <div className="login-title">
              <h1>Login</h1>
            </div>

            <div className="inputbox">
              <input type="email" placeholder="E-mail" required />
            </div>
            <div className="inputbox">
              <input type="password" placeholder="Password" required />
            </div>
          </form>
          <div className="forgotpass">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="bt">
            Sign in
          </button>
          <div className="registration-link">
            New Customer? <a href="#"> Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login