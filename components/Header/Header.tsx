import React, { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import { AmplifySignOut } from '@aws-amplify/ui-react'
import Link from 'next/link'
import './Header.scss'

const Header = () => {
  const [isLoggedIn, setLogIn] = useState(false)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => setLogIn(true))
      .catch(e => {}) // throws if user is not logged in --> ignore
  })
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
            {
              isLoggedIn ? (
                <AmplifySignOut onClick={() => setLogIn(false)}/>
              ) : (
                <Link href="/login">
                  <button type="button" className="btn navbar-btn btn-outline-primary btn-login" id="log-in">
                    Log in
                  </button>
                </Link>
              )
            }
          </li>
        </ul>
      </div>
    </nav>
  )
}

const navItems = [
  {
    label: 'Covid-19',
    link: '#',
    id: ''
  },
  {
    label: 'Membership',
    link: '#',
    id: ''
  },
  {
    label: 'Engage',
    link: '#',
    id: ''
  },
  {
    label: 'About',
    link: '#',
    id: ''
  },
  {
    label: 'New',
    link: '#',
    id: ''
  },
  {
    label: 'EN',
    link: '#',
    id: '',
    icon: ''
  }
]

export default Header
