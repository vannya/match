import React from 'react';

const MemeDisplay = ({link}) => {
  console.log(link)
  return (
    <div className="meme-display">
      <img src={link} alt="" height="100px" width="100px"/>
    </div>
  );
}

export default MemeDisplay;