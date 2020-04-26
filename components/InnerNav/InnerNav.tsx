import React from "react";

import './InnerNav.scss';

const InnerNav = () => {
  return (
    <nav className="inner-nav nav navbar-light navbar-expand-lg justify-content-end">
      <ul className="navbar-nav ml-auto">
        {navItems.map((item, i) => <li className="nav-item" key={i}>
            <a className="nav-link" href="{item.link}">
              {item.label}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

const navItems = [
  {
    label: "General Info",
    link: "#",
    id: "",
  },
  {
    label: "FAQ",
    link: "#",
    id: "",
  },
  {
    label: "Community Projects",
    link: "#",
    id: "",
  },
  {
    label: "Academia",
    link: "#",
    id: "",
  }
];

export default InnerNav;
