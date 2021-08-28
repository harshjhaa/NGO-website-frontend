import React, { useEffect } from "react";
import "./Disclaimer.scss";

function Disclaimer() {
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
    <div className="disclaimer-tab">
      <div className="contents">
        <div className="head-title">DISCLAIMER</div>
        <div className="text-content">
          <div>
            All the information on this website is published in good faith and
            for general information purpose only. We do not make any false
            commitment, warranties about the completeness, reliability and
            accuracy of this information. Any action you take upon the
            information on our website is strictly at your own risk. and we will
            not be liable for any losses and damages in connection with the use
            of our website.
          </div>
          <br />
          <div>
            From our website, you can visit other websites by following tabs to
            these sites. While we strive to provide only links to useful and
            ethical websites, we have no control over the content and nature of
            these sites and the links to other websites do not imply a
            recommendation for all the content found on these sites.
          </div>
          <br />
          <div>
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms which are beyond our
            control.
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
    </div>
  );
}

export default Disclaimer;
