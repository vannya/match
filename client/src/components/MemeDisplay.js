import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Displays a single meme, its tags and buttons to delete or copy link to clipboard.
const MemeDisplay = ({ imgSrc, link, linkId, deleteImage, tags }) => {
  return (
    <div className="meme-display">
      <a href={link}>
        <img src={imgSrc} alt={link} />
      </a>
      <input type="text" value={link} readOnly />
      <p>Tags:</p>
      <div className="tag-boxes">
        {tags.map((tag, i) => {
          return (
            <div key={i} className="tag-item">
              {tag}
            </div>
          );
        })}
      </div>
      <div className="btn-box">
        <button
          className="meme-display-btn red-btn"
          onClick={() => deleteImage(linkId)}
        >
          Delete
        </button>
        <CopyToClipboard text={link}>
          <button className="meme-display-btn">Copy</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default MemeDisplay;
