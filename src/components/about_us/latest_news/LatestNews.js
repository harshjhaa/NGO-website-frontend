import React, { useEffect } from "react";

function LatestNews() {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
        document.getElementById("about-us-tab-id").style.color = "#a943a5";
        document.getElementById("about-us-arrow-id").style.color = "#a943a5";
    
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
