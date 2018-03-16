import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import * as actions from "../../actions";
import demo from "../../demo-data.json";


class HeaderContainer extends Component {
  state = {};

  componentDidMount(){
    this.props.fetchUser();
  }

  // Add Demo Memes 
  loadDemoMemes = () => {
    demo.map(meme => {
      return this.props.addMeme({
        link: meme.link,
        tags: meme.tags
      });
    });
    this.props.fetchMemes();
    this.props.fetchTags();
  }

  // Logs in the Test User and fetches their memes
  async loginTestUser() {
    await this.props.loginDemo();
    await this.props.fetchMemes();
  }

  render() {
    return (
      <React.Fragment>
        <Header oauth={this.props.oauth} loadDemoMemes={this.loadDemoMemes} loginTestUser={() => this.loginTestUser()} openAddModal={this.props.openAddModal} closeAddModal={this.props.closeAddModal} />
        <MobileHeader oauth={this.props.oauth} loadDemoMemes={this.loadDemoMemes} loginTestUser={() => this.loginTestUser()} openAddModal={this.props.openAddModal} closeAddModal={this.props.closeAddModal} />
      </React.Fragment>
    );
  }
}

function mapStateToProps({ oauth }) {
  return { oauth };
}

export default connect(mapStateToProps, actions)(HeaderContainer);
