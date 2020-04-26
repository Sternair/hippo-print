import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./logo" alt=""></img>
          Hippo Print
        </a>

        <ul className="navbar-nav ml-auto">
          {navItems.map(item => <li className="nav-item">
            <a className="nav-link" href="{item.link}">
              {item.label}
            </a>
          </li>
        )}
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

const navItems = [
  {
    label: "Covid-19",
    link: "#",
    id: "",
  },
  {
    label: "Membership",
    link: "#",
    id: "",
  },
  {
    label: "Engage",
    link: "#",
    id: "",
  },
  {
    label: "About",
    link: "#",
    id: "",
  },
  {
    label: "New",
    link: "#",
    id: "",
  },
  {
    label: "EN",
    link: "#",
    id: "",
    icon: "",
  },
];

export default Header;
