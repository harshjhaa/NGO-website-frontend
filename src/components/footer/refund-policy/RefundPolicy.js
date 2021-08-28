import React, { useEffect } from "react";

import "../FooterTabsCommonCSS.scss";
import "./RefundPolicy.scss";

function RefundPolicy() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.getElementById("top-marquee").style.visibility = "hidden";
    return () => {
      document.getElementById("top-marquee").style.visibility = "visible";
    };
  }, []);

  return (
    <div className="refund-policy-tab">
      <div className="contents">
        <div className="head-title">REFUND &amp; CANCELLATION POLICY</div>
        <div className="text-content">
          <p>
            Our policy on refund and cancellation of donations received for
            Truly Help Foundation activities on secure online payment gateway as
            under:
          </p>
          <ul>
            <li>
              Any request for cancellations and refund of online donations once
              duly placed on the website, shall not be entertained under any
              circumstances. No cash or refund of money will be allowed after
              completing the online donation as it is an extremely cumbersome
              process. We therefore request you to be sure before you donate.
            </li>
          </ul>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
    </div>
  );
}

export default RefundPolicy;
