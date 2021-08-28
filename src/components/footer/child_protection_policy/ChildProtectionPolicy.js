import React, { useEffect } from "react";
import "./ChildProtectionPolicy.scss";

function ChildProtectionPolicy() {
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
    <div className="child-protection-tab">
      <div className="contents">
        <div className="head-title">CHILD PROTECTION POLICY</div>
        <div className="text-content">
          <div>
            Truly Help Foundation believes that the protection of children is
            the duty of society. Any kind of discrimination and sexual abuse of
            children is unacceptable under any circumstances. At any given point
            in time, a lot of views exist on what is best for the child. THF
            work is child-centric where we focus on mental and social
            development of child. In keeping mind, we extend to all the
            programmes and activities at Truly Help Foundation where children
            are the primary stakeholders, permeates all aspects of THF’s work
            and is reflected in our policies, practices and activities.
          </div>
          <br />
          <div>
            Truly Help Foundation has a detailed Child Protection Policy to
            safeguard the interest of children as enumerated in the document.
          </div>
        </div>
      </div>
      <div className="hr-line">
        <hr />
      </div>
    </div>
  );
}

export default ChildProtectionPolicy;
