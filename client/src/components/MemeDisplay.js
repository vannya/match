import React from 'react';
import "./MemeDisplay.css";

const MemeDisplay = ({imgSrc, link}) => {
  return (
    <div className="meme-display">
      <a href={link}><img src={imgSrc} alt={link} /></a>
      <input type="text" value={link} />
      <div className="btn-box">
        <button className="meme-display-btn red">Delete</button>
        <button className="meme-display-btn">Copy</button>
      </div>
    </div>
  );
}

export default MemeDisplay;