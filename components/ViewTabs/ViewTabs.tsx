import React, { FC } from 'react';

import './ViewTabs.scss';

const ViewTabs: FC = () => {
  return (
    <ul className="view-tabs nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">My Designs</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Community Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Starred Items</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">View History</a>
      </li>
    </ul>
  );
}

export default ViewTabs
