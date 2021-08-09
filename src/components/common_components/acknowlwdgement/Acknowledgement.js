import React from "react";
import "./Acknowledgement.scss";

function Acknowledgement() {
  return (
    <div className="acknowledgement-container">
      <div className="content">
        <div className="sec-1">
          <img className="img-icon" src="/svg/heart.svg" />
          <p>All our efforts are made possible because of your support.</p>
        </div>
        <div className="sec-2">
          <img className="img-icon" src="/svg/tax.svg" />
          {/* <p>Your donation are Tax Exempted uder 80G of the Indian Income Tax Act.</p> */}
          <p>Your donations are under right hand.</p>
        </div>
        <div className="sec-3">
          <img className="img-icon" src="/svg/security-2.svg" />
          <p>Your donations and transactions are completely safe and secure.</p>
        </div>
      </div>
    </div>
  );
}

export default Acknowledgement;
