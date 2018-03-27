import React from "react";

const Landing = ({logo, example}) => {
  return (
    <div className="landing">
      <img className="large-logo" src={logo} alt="logo" />
      <h2>Memes for your teams!</h2>
      <p>
        When you can only express yourself via meme, have your favorites at your
        fingertips.
      </p>
      <img className="example-image" src={example} alt="example" />

    </div>
  );
};

export default Landing;
