import React, { useEffect } from "react";

function EmergencyCase() {

    useEffect(() => {
        document.getElementById("emergency-tab-id").style.color = "#a943a5";
        document.getElementById("emergency-arrow-id").style.color = "#a943a5";
    
        return () => {
          document.getElementById("emergency-tab-id").style.color = "#000";
          document.getElementById("emergency-arrow-id").style.color = "#000";
        };
      }, []);

    return (
        <div className="margin-top-80">
            Emergency Case
        </div>
    )
}

export default EmergencyCase
