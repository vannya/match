import React from 'react';
import styles from './Landing.module.css';

const Landing = ({ logo, example }) => {
  return (
    <section className={styles.landing}>
      <img className={styles.largeLogo} src={logo} alt="logo" />
      <h2>Memes for your teams!</h2>
      <p>
        When you can only express yourself via meme, have your favorites at your
        fingertips.
      </p>
      <img className={styles.exampleImage} src={example} alt="example" />
    </section>
  );
};

export default Landing;
