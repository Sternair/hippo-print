import React from "react";
import InnerNav from '../InnerNav/InnerNav';
import SignUpButton from '../SignUp/SignUpButton';
import "./Main.scss";

const Main = () => {

  return (
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

      <div className="row">
        <article className="col-9 main-info">
          <h2 className="subtitle">Built for Medical Innovators</h2>
          <div className="app-description">
            <b>HIPPO PRINT</b> is a collaborative community in digital manufacturing. We accelerate the adoption of <b>open source</b> digital manufacturing technologies that focus on optimizing the medical supply chain and increase efficiency
            and agility, while <b>lowering the carbon footprint</b> and price.
          </div>
          <SignUpButton />
        </article>
        <div className="col-3">
          <img src="/COVR3D_V2.08_fit.png" alt="COVR3D"/>
        </div>
      </div>

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
  );
};

export default Main;
