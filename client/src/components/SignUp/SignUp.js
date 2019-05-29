import React from 'react';
import Button from '../common/Button';
import styles from './SignUp.module.css';

const SignUp = ({ logo }) => {
  return (
    <div className={styles.signup}>
      <section>
        <img
          className={styles.largeLogo}
          src={logo}
          alt="Sign up for your free account!"
        />
        <h2>Sign Up for your free account!</h2>
        <h3>
          Use modmemes for free to store your favorite memes from across the
          web. Save your links, sort with your custom tags and be ready for when
          the moment calls for just the right meme.
        </h3>
        <Button className="largeBtn" link="/api/googleLogin">
          Sign Up With Google
        </Button>
        <p>
          ModMemes collects no personal contact information and all data is
          private. We use a token from google to connect your account for
          subsequent logins and nothing more.{' '}
        </p>
      </section>
    </div>
  );
};

export default SignUp;
