import React from "react";
import "./SubscribeNewsletter.scss";

function SubscribeNewsletter() {
  return (
    <div className="subscribe-us-container">
      <div className="contents">
        <div className="contact-no">
          <p>
            Helpline Number: <span>1800-xxxx-xx</span>
          </p>
        </div>
        <div className="email-id">
          <input
            className="inp-email"
            type="email"
            placeholder="Enter Email-Id to Subscribe to News Letter"
          ></input>
          <button className="btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeNewsletter;
