import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import AddImageModal from "./components/AddImageModal";
import MemeDisplay from "./components/MemeDisplay";
import FilterBar from "./components/FilterBar";
import placeholder from "./placeholder.jpg";
import "./App.css";

class App extends Component {
  state = {
    modalShowing: false
  };

  componentDidMount() {
    this.props.fetchUser(); // Fetches to determine auth status
    this.props.fetchMemes(); // Fetches list of memes for current user
    this.props.fetchTags(); // Fetches list of all distinct tags
  }

  // Shows a Filter Bar
  renderFilterBar() {
    switch (this.props.oauth) {
      case null:
        return <div className="filter-bar">Loading</div>;
      case false:
        // Returns if user is not logged in
        return (
          <div className="filter-bar">
            <a href="/api/googleLogin">SignIn</a>
            <button onClick={() => this.loginTestUser()}>TestUser</button>
            <a href="/api/googleLogin">Login</a>
          </div>
        );
      default:
        // Returns if user is logged in
        return (
          <div className="filter-bar">
            <FilterBar />
            <button onClick={() => this.toggleModal()}>Add Images</button>
            <a href="/api/logout">Logout</a>
          </div>
        );
    }
  }

  async loginTestUser(){
    await this.props.loginDemo();
    await this.props.fetchMemes();
  }

  // Renders list of images.
  renderImages() {
    if (!!this.props.memes) {
      return this.props.memes.map((meme, i) => {
        if (this.isImage(meme.link)) {
          return (
            <MemeDisplay
              key={i}
              imgSrc={meme.link}
              link={meme.link}
              linkId={meme._id}
              deleteImage={this.deleteImage}
              tags={meme.tags}
            />
          );
        } else {
          return (
            <MemeDisplay
              key={i}
              imgSrc={placeholder}
              link={meme.link}
              linkId={meme._id}
              deleteImage={this.deleteImage}
              tags={meme.tags}
            />
          );
        }
      });
    }
    //  TODO: Add a view for if there are no images present.
  }

  // Verifies that link is an image, else will render a placeholder image.
  // TODO: Create better placeholder image.
  isImage(link) {
    const linkArr = link.split(".");
    const linkEnding = linkArr[linkArr.length - 1];
    if (linkEnding === "jpg" || linkEnding === "jpeg" || linkEnding === "png" || linkEnding === "gif") {
      return true;
    } else {
      return false;
    }
  }

  // Toggles the AddImageModal
  toggleModal() {
    this.setState({
      modalShowing: !this.state.modalShowing
    });
  }

  // Deletes an Image
  deleteImage = imageId => {
    this.props.deleteMeme(imageId);
    this.props.fetchMemes();
  };

  render() {
    return (
      <div className="App">
        {this.renderFilterBar()}
        <div className="app-body">{this.renderImages()}</div>
        {!!this.state.modalShowing ? (
          <AddImageModal
            toggleModal={() => this.toggleModal()}
            addMeme={this.props.addMeme}
            fetchMemes={() => this.props.fetchMemes()}
          />
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ oauth, memes, tags }) {
  return { oauth, memes, tags };
}

export default connect(mapStateToProps, actions)(App);
