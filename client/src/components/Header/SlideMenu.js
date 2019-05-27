import React from 'react';
import Button from '../common/Button';
import styles from './SlideMenu.module.css';

const SlideMenu = ({
  // profile,
  // updateUser,
  isSlideVisible,
  currentSlide,
  closeSlideMenu,
  openMenu2,
  openSlideMenu
}) => {
  // // Changes the current theme
  // function updateTheme(theme) {
  //   closeSlideMenu();
  // }

  switch (currentSlide) {
    case 2:
      return (
        <div
          className={
            isSlideVisible ? styles.slideMenuWrapper : styles.slideMenuHidden
          }
        >
          <div className={styles.slideOverlay} onClick={closeSlideMenu} />
          <div className={styles.slideMenu}>
            {/* <h2>Change Theme</h2>
            <div className="slide-btn" onClick={() => updateTheme('main')}>
              <h3>Summer</h3>
            </div>
            <div className="slide-btn" onClick={() => updateTheme('dark')}>
              <h3>Dark</h3>
            </div> */}
          </div>
          <Button type="button" className="closeBtn" onClick={openSlideMenu}>
            Back
          </Button>
        </div>
      );
    default:
      return (
        <div
          className={
            isSlideVisible ? styles.slideMenuWrapper : styles.slideMenuHidden
          }
        >
          <div className={styles.slideOverlay} onClick={closeSlideMenu} />
          <div className={styles.slideMenu}>
            <h2>Settings</h2>
            <div className="slide-btn" onClick={openMenu2}>
              <h3>Change Theme</h3>
            </div>
            <a href="/api/logout">
              <h3>Log Out</h3>
            </a>
            <div className={styles.signature}>
              <div>modmemes created by</div>
              <a href="https://vannya.me">Van Tabbert</a>
            </div>
          </div>
          <Button type="button" className="closeBtn" onClick={closeSlideMenu}>
            x
          </Button>
        </div>
      );
  }
};

export default SlideMenu;
