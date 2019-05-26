import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../stylesheets/assets/logo-xs.png";
import Button from "../common/Button";
import LinkButton from "../common/LinkButton";
import FilterBar from "./FilterBar";

const Header = ({oauth, openAddModal, openSlideMenu}) => {
  switch (oauth) {
    case null:
      // If oauth has not returned yet
      return (
        <div className="header">
          <div className="desktop-header">
            <div className="header-left"><Link to="/"><img src={logo} alt="Logo" /></Link></div>
            <div className="header-right">
              <LinkButton link="/signup"><Button type="button" className="meme-btn" text="SignUp" /></LinkButton>
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
            <div className="header-left"><Link to="/"><img src={logo} alt="Logo" /></Link></div>
            <div className="header-right">
              <LinkButton link="/signup"><Button type="button" className="meme-btn" text="SignUp" /></LinkButton>
              <LinkButton link="/api/googleLogin"><Button type="button" className="meme-btn" text="Login" /></LinkButton>
            </div>
          </div>
        </div>
      );
    default:
      // If user is logged in
      return (
        <div className="header">
          <div className="desktop-header">
            <div className="header-left">
              <Link to="/memeboard"><img src={logo} alt="Logo" /></Link>
            </div>
              <div className="header-right">   
                <FilterBar />
                <Button type="button" className="meme-btn" onClick={openAddModal} text="Add Memes!" />
                <Button type="button" className="meme-btn" onClick={openSlideMenu} text="Settings" />
            </div>
          </div>
        </div>
      );
  }
}

export default Header;