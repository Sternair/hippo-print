import React, { useState } from "react";

import "./Main.scss";
import SignUpButton from '../components/SignUp/SignUpButton';

const Main = () => {

  return (
    <div className="container main">
      <div className="row">
        <div className="col-12">
          <h1 className="title">Europe’s Digital Manufacturing Community Making Medical Manufacturing Local Again</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <h2 className="subtitle">Built for Medical Innovators</h2>
          <div className="app-description">
            <b>HIPPO PRINT</b> is a collaborative community in digital manufacturing. We accelerate the adoption of{" "}
            <b>open source</b>
            digital manufacturing technologies that focus on optimizing the medical supply chain and increase efficiency
            and agility, while <b>lowering the carbon footprint</b> and price.
          </div>
          <SignUpButton />
        </div>
        <div className="col-3">_img_</div>
      </div>
      <div className="row">
        <div className="col-6">
          <h2 className="subtitle">Community Projects</h2>
          <div>Come and discover our collection of community projects.</div>
          <div>
            <button className="btn btn-outline-primary">Discover Projects</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
