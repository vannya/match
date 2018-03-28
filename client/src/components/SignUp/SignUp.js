import React from 'react';
import LinkButton from "../common/LinkButton";

const SignUp = ({logo}) => {
  return (
    <div className="signup">
      <section>
        <img className="large-logo" src={logo} alt="logo" />
        <h2>Sign Up for your free account!</h2>
        <h3>Use modmemes for free to store your favorite memes from across the web. Save your links, sort with your custom tags and be ready for when the moment calls for just the right meme.</h3>
        <LinkButton className="large-btn" link="/api/googleLogin">Sign Up With Google</LinkButton>
        <p>ModMemes collects no personal contact information and all data is private. We use a token from google to connect your account for subsequent logins and nothing more. </p>
      </section>
    </div>
  );
}

export default SignUp;