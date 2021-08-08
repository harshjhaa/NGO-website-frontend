import React, { useEffect } from "react";
import "./Covid.scss";

function Covid() {
  useEffect(() => {
    document.getElementById("emergency-tab-id").style.color = "#0096ff";
    document.getElementById("emergency-arrow-id").style.color = "#0096ff";

    return () => {
      document.getElementById("emergency-tab-id").style.color = "#000";
      document.getElementById("emergency-arrow-id").style.color = "#000";
    };
  }, []);

  return <div className="margin-top-80">Covid</div>;
}

export default Covid;
