import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Logo.png'
import '../Styles/style_register.css'
function Signup() {
  return (
    <div className="Signup">
      <div class="split leftUp">
        <div class="centre">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
      </div>
      <div className="split rightUp">
      <div class="wrapper">
        <form action="">
          <div class="register-text">
            <h1>Register</h1>
          </div>
            <div class="inputbox">
              <input type="text" id="fname" placeholder="First Name" required />
            </div>
            <div class="inputbox">
              <input type="text" id="lname" placeholder="Last Name" required />
            </div>
          <div class="inputbox">
            <input type="text" placeholder="Mobile number" required />
          </div>

          <div class="inputbox">
            <input type="email" placeholder="E-mail" required />
          </div>

          <div class="inputbox">
            <input type="password" placeholder="Password" required />
          </div>

          <div class="inputbox">
            <input type="password" placeholder="Confirm Password" required />
          </div>
        </form>

        <button type="submit" class="bt">
          Sign Up
        </button>
        <div class="login-link">
          Already have an account? <a href="#">Login</a>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Signup