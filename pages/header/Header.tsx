import React from "react";
import './Header.scss';
// import logo from '../hippo_print.jpg';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="{logo}" alt=""></img>
          Hippo Print
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Covid-19
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Membership
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Engage
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              New
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              EN
            </a>
          </li>
          <li>
            <button type="button" className="btn navbar-btn btn-outline-primary btn-login" id="log-in">
              Log in
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
