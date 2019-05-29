import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styles from './MemeDisplay.module.css';
import Button from './common/Button';

// Displays a single meme, its tags and buttons to delete or copy link to clipboard.
const MemeDisplay = ({ imgSrc, link, tags, toggleModal }) => {
  return (
    <div className={styles.memeDisplay}>
      <a href={link}>
        <img src={imgSrc} alt={link} />
      </a>
      <input type="text" value={link} readOnly />
      <p>Tags:</p>
      <div className={styles.tagBoxes}>
        {tags.map((tag, i) => {
          return (
            <div key={i} className={styles.tagItem}>
              {tag}
            </div>
          );
        })}
      </div>
      <div className={styles.btnBox}>
        <Button className="memeDisplayBtn" onClick={toggleModal}>
          Edit
        </Button>
        <CopyToClipboard text={link}>
          <Button className="memeDisplayBtn">Copy</Button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default MemeDisplay;
