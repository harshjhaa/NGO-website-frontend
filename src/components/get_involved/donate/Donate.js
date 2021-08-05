import React, { useEffect } from "react";

const Donate = () => {

    useEffect(() => {
        document.getElementById("get-involved-tab-id").style.color = "#a943a5";
        document.getElementById("get-involved-arrow-id").style.color = "#a943a5";
    
        return () => {
          document.getElementById("get-involved-tab-id").style.color = "#000";
          document.getElementById("get-involved-arrow-id").style.color = "#000";
        };
    }, []);

    return (
        <div className="margin-top-80">
            Donate
        </div>
    );
};

export default Donate;