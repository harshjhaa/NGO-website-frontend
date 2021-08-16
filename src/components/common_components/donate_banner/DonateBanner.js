import React from "react";
import "./DonateBanner.scss";

function DonateBanner({ contentImage, title, description }) {
  return (
    <div className="donate-img-banner">
      <img className="banner-img" src={contentImage} />
      <h2 className="banner-title">{title}</h2>
      <div className="input-button-container">
        <input
          className="input-donate"
          type="number"
          placeholder="DONATE ANY AMOUNT (INR)"
        ></input>
        <button className="donate-inp-btn">PROCEED</button>
      </div>
      <h3 className="banner-description">{description}</h3>
    </div>
  );
}

export default DonateBanner;
