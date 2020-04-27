import React from "react";
import InnerNav from "../InnerNav/InnerNav";
import Header from "../Header/Header";
import { Footer } from '../Footer/Footer'
import "./Layout.scss";

const Layout = ({ children }: any) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="container-fluid nav-container">
        <div className="container">
          <div className="row inner-nav">
            <div className="col-12">
              <InnerNav />
            </div>
          </div>
        </div>
      </div>
      <div style={{minHeight: '70vh'}}>
        {children}
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
