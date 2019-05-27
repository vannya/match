import React from 'react';
import logo from '../../assets/logo-xs.png';
import Button from '../common/Button';
import FilterBar from './FilterBar';
import styles from './MobileHeader.module.css';

const MobileHeader = ({ oauth, openAddModal }) => {
  switch (oauth) {
    case null:
      // If oauth has not returned yet
      return (
        <div className="header">
          <div className={styles.mobileHeader}>
            <div className={styles.mobileHeaderRow}>
              <Button
                type="button"
                link="/api/googleLogin"
                className="memeBtn"
                text="SignUp"
              />
              <Button
                type="button"
                link="/api/googleLogin"
                className="memeBtn"
                text="Login"
              />
            </div>
          </div>
        </div>
      );
    case false:
      // If user is not logged in
      return (
        <div className="header">
          <div className={styles.mobileHeader}>
            <div className={styles.mobileHeaderRow}>
              <Button
                type="button"
                link="/api/googleLogin"
                className="memeBtn"
                text="SignUp"
              />
              <Button
                type="button"
                link="/api/googleLogin"
                className="memeBtn"
                text="Login"
              />
            </div>
          </div>
        </div>
      );
    default:
      // If user is logged in
      return (
        <div className="header">
          <div className={styles.mobileHeader}>
            <div className={styles.mobileHeaderRow}>
              <img src={logo} alt="Logo" />
            </div>
            <div className={styles.mobileHeaderRow}>
              <FilterBar />
            </div>
            <div className={styles.mobileHeaderRow}>
              <Button
                type="button"
                className="memeBtn"
                onClick={openAddModal}
                text="Add Memes!"
              />
              <Button
                type="button"
                link="/api/logout"
                className="memeBtn"
                text="Logout"
              />
            </div>
          </div>
        </div>
      );
  }
};

export default MobileHeader;
