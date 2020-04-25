import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <a className="navbar-brand" href="#">
              <img src="hippo_print.jpg" alt=""></img>
            </a>
        <a className="navbar-brand" href="#">Hippo Print</a>

        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Covid-19</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Membership</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Engage</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">New</a>
        </li>
        <li><button type="submit" className="btn navbar-btn btn-info" name="my-acc" id="my-acc"  value="My Account">My Account</button></li>
        <li><button type="submit" className="btn navbar-btn btn-info" name="sign-up" id="sign-up"  value="Sign up">Sign Up</button></li>
      </ul>
      </div>
    </nav>
  )
}

export default Header

