import React from 'react';
import logo from "../../stylesheets/assets/logo-xs.png";
import Button from "../common/Button";
import LinkButton from "../common/LinkButton";
import FilterBar from "./FilterBar";

const Header = ({oauth, loadDemoMemes, openAddModal, loginTestUser}) => {
  switch (oauth) {
    case null:
      // If oauth has not returned yet
      return (
        <div className="header">
          <div className="desktop-header">
            <div className="header-left"><img src={logo} alt="Logo" /></div>
            <div className="header-right">
              <LinkButton link="/api/googleLogin"><Button type="button" className="meme-btn" text="SignUp" /></LinkButton>
              <LinkButton link="/api/googleLogin"><Button type="button" className="meme-btn" text="Login" /></LinkButton>
            </div>
          </div>
        </div>
      );
    case false:
      // If user is not logged in
      return (
        <div className="header">
          <div className="desktop-header">
            <div className="header-left"><img src={logo} alt="Logo" /></div>
            <div className="header-right">
              <LinkButton link="/api/googleLogin"><Button type="button" className="meme-btn" text="SignUp" /></LinkButton>
              <LinkButton link="/api/googleLogin"><Button type="button" className="meme-btn" text="Login" /></LinkButton>
            </div>
          </div>
        </div>
      );
    default:
      // If user is not logged in
      return (
        <div className="header">
          <div className="desktop-header">
            <div className="header-left">
              <img src={logo} alt="Logo" />
            </div>
              <div className="header-right">   
                <FilterBar />
                <Button type="button" className="meme-btn" onClick={openAddModal} text="Add Memes!" />
                <LinkButton link="/api/logout"><Button type="button" className="meme-btn" text="Logout" /></LinkButton>
            </div>
          </div>
        </div>
      );
  }
}

export default Header;