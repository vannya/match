import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./actions";
import AddImageModal from "./components/AddImageModal";
import "./App.css";

class App extends Component {
  state = {
    modalShowing: false
  };

  componentDidMount() {
    this.props.fetchUser();
  }

  renderFilterBar() {
    switch (this.props.oauth) {
      case null:
        return;
      case false:
        return (
          <div className="filter-bar">
            <a href="/api/googleLogin">SignIn</a>
            <button onClick={() => this.props.loginDemo()}>TestUser</button>
            <a href="/api/googleLogin">Login</a>
          </div>
        );
      default:
        return (
          <div className="filter-bar">
            <button onClick={() => this.toggleModal()}>Add Images</button>
            <a href="/api/logout">Logout</a>
          </div>
        );
    }
  }

  toggleModal() {
    this.setState({
      modalShowing: !this.state.modalShowing
    });
  }

  addNewMeme(newMeme) {
    console.log(newMeme);
    this.props.addMeme(newMeme);
  }

  render() {
    return (
      <div className="App">
        {this.renderFilterBar()}
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

function mapStateToProps({ oauth }) {
  return { oauth };
}

export default connect(mapStateToProps, actions)(App);
