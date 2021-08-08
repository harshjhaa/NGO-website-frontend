import React, { useEffect } from "react";

function Legacy() {

    useEffect(() => {
        document.getElementById("get-involved-tab-id").style.color = "#0096ff";
        document.getElementById("get-involved-arrow-id").style.color = "#0096ff";
    
        return () => {
          document.getElementById("get-involved-tab-id").style.color = "#000";
          document.getElementById("get-involved-arrow-id").style.color = "#000";
        };
    }, []);

    return (
        <div className="margin-top-80">
            Legacy
        </div>
    )
}

export default Legacy
