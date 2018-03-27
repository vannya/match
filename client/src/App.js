import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import logo from "./stylesheets/assets/logo.png";
import example from "./stylesheets/assets/example.jpg";

import HeaderContainer from "./components/Header/HeaderContainer";
import AddEditModalContainer from "./components/AddEditModal/AddEditModalContainer";
import Landing from "./components/Landing/Landing";
import MemeBoard from "./components/MemeBoard/MemeBoard";

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
      <div className={`theme-${!!this.props.oauth ? this.props.oauth.theme : "main"}`}>
      <div className="App">
        <HeaderContainer
          openAddModal={() => this.toggleModal("add", null)}
          closeAddModal={() => this.toggleModal(null)}
        />
        <div className="app-body">
          {!!this.props.memes ? (
            <MemeBoard
              toggleModal={() => this.toggleModal("edit", this.props.currentMeme)}
              memes={this.props.memes}
            />
          ) : (
            <Landing logo={logo} example={example} />
          )}
        </div>
        {!!this.state.modalShowing ? (
          <AddEditModalContainer
            meme={this.state.memeToEdit}
            modalType={this.state.modalType}
            toggleModal={() => this.toggleModal(null)}
          />
        ) : null}
      </div>
      </div>
    );
  }
}

function mapStateToProps({ oauth, memes, tags, currentMeme }) {
  return { oauth, memes, tags, currentMeme };
}

export default connect(mapStateToProps, actions)(App);
