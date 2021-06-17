import React from "react";
import "./Home.scss";

const Home = (props) => {
  return (
    <div>
      <div class="feature-content-1"></div>
      <h2>Images Side by Side</h2>
      <p>Float images side by side:</p>
      <div class="clearfix">
        <div class="img-container">
          {/* <img src="img_1.jpg" alt="abcd" style="width:100%" /> */}
        </div>
       <div class="img-container">
          {/* <img src="img_2.jpg" alt="qqdde"style="width:100%" /> */}
        </div>
        <div class="img-container">
          {/* <img src="img_3.jpg" alt="NGo" style="width:100%" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
