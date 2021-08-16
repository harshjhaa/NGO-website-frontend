import React from "react";
import './HungerRuralDonate.scss'

function HungerRuralDonate() {
  return (
    <div className="donate-rural-area">
      <div className="contents">
        <h2>HELP US FIGNT THE HUNGER IN RURAL AREAS</h2>
        <br />
        <br />
        <div className="inp-btn">
          <input
            className="input-donate"
            type="number"
            placeholder="DONATE ANY AMOUNT (INR)"
          ></input>
          <button className="donate-inp-btn">PROCEED</button>
        </div>
        <br />
        <br />
        <h3>
          Some rural residents and households are food insecure,
          <br />
          meaning they cannot rely on access to sufficient
          <br />
          affordable and nutritious food at all times,
          <br />
          increasing the risk of poor health outcomes.
        </h3>
      </div>
    </div>
  );
}

export default HungerRuralDonate;