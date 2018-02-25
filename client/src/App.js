import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import AddImageModal from "./components/AddImageModal";
import MemeDisplay from "./components/MemeDisplay";
import placeholder from "./placeholder.jpg";
import "./App.css";

class App extends Component {
  state = {
    modalShowing: false
  };

  componentDidMount() {
    this.props.fetchUser(); // Fetches to determine auth status
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
            <button onClick={() => this.props.loginDemo()}>TestUser</button>
            <a href="/api/googleLogin">Login</a>
          </div>
        );
      default:
        // Returns if user is logged in
        return (
          <div className="filter-bar">
            <button onClick={() => this.toggleModal()}>Add Images</button>
            <a href="/api/logout">Logout</a>
          </div>
        );
    }
  }

  renderImages() {
    this.props.fetchMemes(); // Fetches list of memes for current user
    if (!!this.props.memes) {
      return this.props.memes.map((meme, i) => {
        if (this.isImage(meme.link)) {
          return <MemeDisplay key={i} imgSrc={meme.link} link={meme.link} />;
        } else {
          return <MemeDisplay key={i} imgSrc={placeholder} link={meme.link} />
        }
      });
    }
  }

  isImage(link){
    const linkArr =  link.split(".");
    const linkEnding = linkArr[linkArr.length - 1];
    if ( linkEnding === "jpg" || linkEnding === "jpeg" || linkEnding === "png") {
      return true;
    } else {
      console.log(linkEnding);
      return false;
    }
  }

  // Toggles the AddImageModal
  toggleModal() {
    this.setState({
      modalShowing: !this.state.modalShowing
    });
  }

  render() {
    return (
      <div className="App">
        {this.renderFilterBar()}
        <div className="app-body">{this.renderImages()}</div>
        {!!this.state.modalShowing ? (
          <AddImageModal
            toggleModal={() => this.toggleModal()}
            addMeme={this.props.addMeme}
          />
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ oauth, memes }) {
  return { oauth, memes };
}

export default connect(mapStateToProps, actions)(App);
