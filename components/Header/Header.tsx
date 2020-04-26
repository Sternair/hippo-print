import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import "./Header.scss";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setLogIn] = useState(false);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setLogIn(true))
      .catch((e) => {}); // throws if user is not logged in --> ignore
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="./HippoMakes_Logo_v2.png" height="30" alt="hippo makes brand logo" />
        </a>

        <ul className="navbar-nav ml-auto">
          {navItems.map((item, i) => (
            <li className={`nav-item${router.pathname === item.link ? " active" : ""}`} key={i}>
              <Link href={item.link}>
                <a className="nav-link">{item.label}</a>
              </Link>
            </li>
          ))}
          <li>
            {isLoggedIn ? (
              <DropdownButton
                id="dropdown-item-button"
                title={<img src="./user.png" alt="" className="userIcon" />}
                className="loggedUser"
                drop="down"
              >
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <AmplifySignOut onClick={() => setLogIn(false)} />
                </Dropdown.Item>
              </DropdownButton>
            ) : (
              <Link href="/login">
                <button type="button" className="btn navbar-btn btn-outline-primary btn-login" id="log-in">
                  Log in
                </button>
              </Link>
            )}
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
  },
  {
    label: "Gallery",
    link: "/gallery",
  },
  {
    label: "Membership",
    link: "#",
  },
  {
    label: "Engage",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
  {
    label: "EN",
    link: "#",
  },
];

export default Header;
