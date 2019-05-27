import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import * as actions from "./actions";
import logo from "./stylesheets/assets/logo.png";
import example from "./stylesheets/assets/example.jpg";

import HeaderContainer from "./components/Header/HeaderContainer";
import AddEditModalContainer from "./components/AddEditModal/AddEditModalContainer";
import Landing from "./components/Landing/Landing";
import MemeBoard from "./components/MemeBoard/MemeBoard";
import SEO from "./components/Meta/SEO";
import SignUp from "./components/SignUp/SignUp";

class App extends Component {
  state = {
    modalShowing: false,
    modalType: "add",
    memeToEdit: "",
    theme: "main"
  };

  // Fetches to determine auth status
  componentDidMount() {
    this.props.fetchUser();
  }

  // Toggles the AddEditModal
  toggleModal(type, meme) {
    this.setState({
      modalShowing: !this.state.modalShowing,
      modalType: type,
      memeToEdit: meme || null
    });
  }

  // Renders the App
  render() {
    return (
      <div
        className={`theme-${
          !!this.props.oauth ? this.props.oauth.theme : "main"
        }`}
      >
        <div className="App">
          <HeaderContainer
            openAddModal={() => this.toggleModal("add", null)}
            closeAddModal={() => this.toggleModal(null)}
          />
          <div className="app-body">
            <Route exact path="/" render={() => <Landing logo={logo} example={example} />} />
            <Route
              exact path="/memeboard"
              render={() => (
                <MemeBoard
                  toggleModal={() =>
                    this.toggleModal("edit", this.props.currentMeme)
                  }
                  memes={this.props.memes}
                />
              )}
            />
            <Route exact path="/signup" render={() => <SignUp logo={logo} />} />
          </div>
          {!!this.state.modalShowing ? (
            <AddEditModalContainer
              meme={this.state.memeToEdit}
              modalType={this.state.modalType}
              toggleModal={() => this.toggleModal(null)}
            />
          ) : null}
        </div>
        <SEO url="default" />
      </div>
    );
  }
}

function mapStateToProps({ oauth, memes, tags, currentMeme }) {
  return { oauth, memes, tags, currentMeme };
}

export default withRouter(connect(mapStateToProps, actions)(App));
