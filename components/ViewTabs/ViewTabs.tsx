import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import './ViewTabs.scss';

const ViewTabs: FC = () => {
  const router = useRouter();

  return (
    <ul className="view-tabs nav nav-tabs">
      {tabItems.map((item, i) => (
        <li className="nav-item" key={i}>
          <Link href={item.link}>
            <a className={`nav-link${router.pathname === item.link ? ' active' : ''}`}>
              {item.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const tabItems = [
  {
    label: 'My Designs',
    link: '#',
  },
  {
    label: 'Community Projects',
    link: '/community',
  },
  {
    label: 'Starred Items',
    link: '#',
  },
  {
    label: 'View History',
    link: '#',
  }
]

export default ViewTabs
