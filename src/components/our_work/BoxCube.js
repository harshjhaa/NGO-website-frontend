import React from "react";
import './BoxCube.scss'

function BoxCube() {
  return (
    <div className="box-cube-animation">
       <div className="slider">
          <div className="container">
            <div className="slide x"></div>
            <div className="slide y"></div>
            <div className="slide z"></div>
          </div>
          <div className="shadow"></div>
        </div>
    </div>
  );
}

export default BoxCube;
