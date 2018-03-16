import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
import logo from "./stylesheets/assets/logo.png";

import HeaderContainer from "./components/Header/HeaderContainer";

import AddEditMemeModal from "./components/AddEditMemeModal";
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

  // Toggles the AddImageModal
  toggleModal(type, meme) {
    this.setState({
      modalShowing: !this.state.modalShowing,
      modalType: type,
      memeToEdit: meme || null
    });
  }

  // Deletes an Image and refetches memes and tags.
  deleteImage = async imageId => {
    await this.props.actions.deleteMeme(imageId);
    this.props.actions.fetchMemes();
    this.props.actions.fetchTags();
    this.toggleModal(null);
  };

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
          <AddEditMemeModal
            meme={this.state.memeToEdit}
            toggleModal={() => this.toggleModal(null)}
            addMeme={this.props.actions.addMeme}
            fetchMemes={() => this.props.actions.fetchMemes()}
            fetchTags={() => this.props.actions.fetchTags()}
            modalType={this.state.modalType}
            deleteMeme={() => this.deleteImage(this.state.memeToEdit._id)}
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
