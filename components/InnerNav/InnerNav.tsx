import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import './InnerNav.scss'

const InnerNav = () => {
  const router = useRouter()

  return (
    <nav className="inner-nav nav navbar-light navbar-expand-lg justify-content-end">
      <ul className="navbar-nav ml-auto">
        {navItems.map((item, i) => (
          <li className={`nav-item${router.pathname === item.link ? ' active' : ''}`} key={i}>
            <Link href={item.link}>
              <a className="nav-link">
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const navItems = [
  {
    label: 'General Info',
    link: '/#',
  },
  {
    label: 'FAQ',
    link: '/#',
  },
  {
    label: 'Community Projects',
    link: '/community',
  },
  {
    label: 'Academia',
    link: '/#',
  }
]

export default InnerNav
