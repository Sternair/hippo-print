import React from 'react';
import InnerNav from '../InnerNav/InnerNav';
import Header from '../Header/Header';

import './Layout.scss';


const Layout = ({ children }: any) => {

  return (
    <>
      <Header />
      <div className="container layout">

        <div className="row inner-nav">
          <div className="col-12">
            <InnerNav />
          </div>
        </div>

        {children}

      </div>
    </>
  )
}

export default Layout
