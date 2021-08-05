import React, { useEffect } from 'react';

function Internships() {

    useEffect(() => {
        document.getElementById("thf-fellowship-tab-id").style.color = "#a943a5";
        document.getElementById("thf-fellowship-arrow-id").style.color = "#a943a5";
    
        return () => {
          document.getElementById("thf-fellowship-tab-id").style.color = "#000";
          document.getElementById("thf-fellowship-arrow-id").style.color = "#000";
        };
    },[])

    return (
        <div className="margin-top-80">
            Internships
        </div>
    )
}

export default Internships
