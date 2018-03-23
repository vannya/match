import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import logo from "./stylesheets/assets/logo.png";

import HeaderContainer from "./components/Header/HeaderContainer";
import AddEditModalContainer from "./components/AddEditModal/AddEditModalContainer";

import MemeDisplay from "./components/MemeDisplay";
import placeholder from "./stylesheets/assets/website.png";

class App extends Component {
  state = {
    modalShowing: false,
    modalType: "add",
    memeToEdit: ""
  };

  // Fetches to determine auth status
  componentDidMount() {
    this.props.actions.fetchUser();
  }

  // Verifies that link is an image, else will render a placeholder image.
  isImage(link) {
    // Turns link into array to verify file type
    const linkArr = link.split(".");
    const linkEnding = linkArr[linkArr.length - 1];
    if (
      linkEnding === "jpg" ||
      linkEnding === "jpeg" ||
      linkEnding === "png" ||
      linkEnding === "gif"
    ) {
      return true;
    } else {
      return false;
    }
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
      <div className="App">
        <HeaderContainer openAddModal={() => this.toggleModal("add", null)} closeAddModal={() => this.toggleModal(null)} />
        <div className="app-body">
          {!!this.props.memes ? (
            <div className="memes-list">
              {this.props.memes.map((meme, i) => {
                return (
                  <MemeDisplay
                    key={i}
                    imgSrc={this.isImage(meme.link) ? meme.link : placeholder}
                    link={meme.link}
                    linkId={meme._id}
                    deleteImage={this.deleteImage}
                    tags={meme.tags}
                    toggleModal={() => this.toggleModal("edit", meme)}
                  />
                );
              })}
            </div>
          ) : (
            <div className="basic-landing">
              <img className="large-logo" src={logo} alt="logo" />
              <h2>Memes for your teams!</h2>
              <p>
                When you can only express yourself via meme, have your favorites
                at your fingertips.
              </p>
            </div>
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
    );
  }
}

function mapStateToProps({ oauth, memes, tags }) {
  return { oauth, memes, tags };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
