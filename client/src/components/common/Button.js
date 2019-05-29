import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, className, children, onClick, link }) => {
  if (!link) {
    return (
      <button type={type} className={styles[className]} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return (
      <a href={link}>
        <button type={type} className={styles[className]}>
          {children}
        </button>
      </a>
    );
  }
};

export default Button;
