import React from 'react';
import "./MemeDisplay.css";

const MemeDisplay = ({imgSrc, link}) => {
  return (
    <div className="meme-display">
      <img src={imgSrc} alt="" height="100px" width="100px" style={{backgroundColor: "red"}}/>
    </div>
  );
}

export default MemeDisplay;