import React from 'react';
import "./MemeDisplay.css";

const MemeDisplay = ({imgSrc, link, linkId, deleteImage, tags}) => {

  function renderTags(){
    return tags.map((tag, i) => {
      return (
        <div key={i} className="tag-item">{tag}</div>
      );
    });
  }

  return (
    <div className="meme-display">
      <a href={link}><img src={imgSrc} alt={link} /></a>
      <input type="text" value={link} readOnly />
      <p>Tags:</p>
      <div className="tag-boxes">
        {renderTags()}
      </div>
      <div className="btn-box">
        <button className="meme-display-btn red-btn" onClick={() => deleteImage(linkId)}>Delete</button>
        <button className="meme-display-btn">Copy</button>
      </div>
    </div>
  );
}

export default MemeDisplay;