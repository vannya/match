import React from "react";
import logo from "../../stylesheets/assets/logo-xs.png";
import Button from "../common/Button";
import LinkButton from "../common/LinkButton";
import FilterBar from "./FilterBar";

const MobileHeader = ({
  oauth,
  loadDemoMemes,
  openAddModal,
  loginTestUser
}) => {
  switch (oauth) {
    case null:
      // If oauth has not returned yet
      return <div className="header">"Loading"</div>;
    case false:
      // If user is not logged in
      return (
        <div className="header">
          <div className="mobile-header">
            <div className="mobile-header-row">
              <img src={logo} alt="Logo" />
            </div>
            <div className="mobile-header-row">
              <LinkButton link="/api/googleLogin">
                <Button type="button" className="meme-btn" text="SignUp" />
              </LinkButton>
              <LinkButton link="/api/googleLogin">
                <Button type="button" className="meme-btn" text="Login" />
              </LinkButton>
            </div>
            <div className="mobile-header-row">
              <Button
                type="button"
                className="meme-btn"
                onClick={loginTestUser}
                text="TestUser"
              />
            </div>
          </div>
        </div>
      );
    default:
      // If user is not logged in
      return (
        <div className="header">
          <div className="mobile-header">
            <div className="mobile-header-row">
              <img src={logo} alt="Logo" />
            </div>
            <div className="mobile-header-row">
              <FilterBar />
            </div>
            <div className="mobile-header-row">
              <Button
                type="button"
                className="meme-btn"
                onClick={openAddModal}
                text="Add Memes!"
              />
              <LinkButton link="/api/logout">
                <Button type="button" className="meme-btn" text="Logout" />
              </LinkButton>
            </div>
          </div>
        </div>
      );
  }
};

export default MobileHeader;
