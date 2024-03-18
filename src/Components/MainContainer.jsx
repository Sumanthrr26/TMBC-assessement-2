import React from "react";
import "../Styles/maincontainer.css";
const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="info-container">
        <div>
          <h1>Hello, John</h1>
        </div>
        <div>
          <h2>How may i help you?</h2>
        </div>
      </div>

      <div className="detail-container">
        <div className="details">
          <p>Trending smart watches 2024</p>
        </div>
        <div className="details">
          <p>Portable vacuum cleaner</p>
        </div>
        <div className="details">
          <p>Kurti sets under 600</p>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
