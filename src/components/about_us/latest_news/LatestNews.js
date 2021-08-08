import React, { useEffect } from "react";

function LatestNews() {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
        document.getElementById("about-us-tab-id").style.color = "#0096ff";
        document.getElementById("about-us-arrow-id").style.color = "#0096ff";
    
        return () => {
          document.getElementById("about-us-tab-id").style.color = "#000";
          document.getElementById("about-us-arrow-id").style.color = "#000";
        };
      }, []);

    return (
        <div className="margin-top-80">
            Latest News
        </div>
    )
}

export default LatestNews
