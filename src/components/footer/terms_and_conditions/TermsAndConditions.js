import React, { useEffect } from "react";
import "./TermsAndConditions.scss";

function TermsAndConditions() {
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
    <div className="terms-and-conditions-tab">
      <div className="contents">
        <div className="head-title">TERMS AND CONDITIONS</div>
        <div className="text-content">
          <p>
            The use of this site is provided by TRULY HELP FOUNDATION and is
            subject to the acceptance of these following Terms and Conditions:
          </p>
          <ul>
            <li>
              TRULY HELP FOUNDATION may change these terms and conditions from
              time to time; your use of the website indicates your acceptance of
              the terms and conditions at the time of use.
            </li>
            <li>
              TRULY HELP FOUNDATION reserves the right to change the content of
              the website at any time
            </li>
            <li>
              TRULY HELP FOUNDATION shall in no event be liable for any damages
              including, without limitation, direct, indirect or consequential
              damages, whatsoever arising from or in connection with the use or
              loss of use of the site, or any content on the site.
            </li>
            <li>
              When we provide links to other websites it does not mean that we
              approve or endorse the views and information contained in the
              website.
            </li>
            <li>
              We do not guarantee that the site’s facilities and functions will
              be free from error or uninterrupted, that the site or the server
              that makes it available to you are free of viruses or bugs, that
              defects will be corrected, or that the content on the site is
              accurate or complete.
            </li>
            <li>
              Any communication or material that you transmit to, or post on any
              public area of this site will be treated as non-confidential and
              non-proprietary information unless otherwise stated by TRULY HELP
              FOUNDATION. We reserve the right to remove without notice any
              material posted in any public area of the site.
            </li>
            <li>
              Images and photos used on this website are the property of Truly
              Help Foundation or other Copyright owners. They may not be
              reproduced or used without Truly Help Foundation’ or the copyright
              owner’s written consent.
            </li>
            <li>
              These terms and conditions shall be governed by and construed in
              accordance with the laws of India. Any disputes shall be subject
              to the exclusive jurisdiction of the Courts of India.
            </li>
          </ul>
          <div>
            If you do not accept these Terms and Conditions in full, you must
            stop using this site immediately. We reserve the right to prevent
            you accessing this site, without prejudice to any of our other
            rights, if we consider that you have contravened any of these Terms
            and Conditions.
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
    </div>
  );
}

export default TermsAndConditions;
