import React from 'react';
import Button from "../common/Button";

const SlideMenu = ({profile, updateUser, isSlideVisible, currentSlide, closeSlideMenu, openMenu2, openSlideMenu}) => {

  // Changes the current theme
  function updateTheme(theme){
    const user = profile;
    user.theme = theme;
    updateUser(user);
    closeSlideMenu();
  }

  switch (currentSlide) {
    case 2:
      return (
        <div className={isSlideVisible ? "slide-menu-wrapper" : "slide-menu-hidden"}>
          <div className="slide-overlay" onClick={closeSlideMenu} />
          <div className="slide-menu">
            <h2>Change Theme Colors</h2>
            <div onClick={() => updateTheme("main")}><h3>Summer</h3></div>
            <div onClick={() => updateTheme("dark")}><h3>Dark</h3></div>
          </div>
          <Button type="button" className="closeBtn" text="Back" onClick={openSlideMenu} />
        </div>
      );
    default:
      return (
        <div className={isSlideVisible ? "slide-menu-wrapper" : "slide-menu-hidden"}>
          <div className="slide-overlay" onClick={closeSlideMenu} />
          <div className="slide-menu">
            <h2>Settings</h2>
            <div onClick={openMenu2}><h3>Change Theme</h3></div>
            <a href="/api/logout"><h3>Log Out</h3></a>
          </div>
          <Button type="button" className="closeBtn" text="x" onClick={closeSlideMenu} />
        </div>
      );
  }
}

export default SlideMenu;