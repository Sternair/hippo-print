import React from 'react';
import InnerNav from '../InnerNav/InnerNav';
import Header from '../Header/Header';


const Layout = ({ children }: any) => {

  return (
    <>
      <Header />
      <div className="container main">

        <div className="row inner-nav">
          <div className="col-12">
            <InnerNav />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 className="title">Europe’s Digital Manufacturing Community Making Medical Manufacturing Local Again</h1>
          </div>
        </div>

        {children}

        <div className="row">
          <div className="col-9">
            <h2 className="subtitle">Community Projects</h2>
            <div className="community-info">Come and discover our collection of community projects.</div>
            <div>
              <button className="btn btn-outline-primary">Discover Projects</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Layout
