import React, { useEffect } from "react";

function Financial() {

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
            Financial
        </div>
    )
}

export default Financial;
