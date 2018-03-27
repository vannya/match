import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import MobileHeader from "./MobileHeader";
import SlideMenu from "./SlideMenu";
import * as actions from "../../actions";

class HeaderContainer extends Component {
  state = {
    isSlideVisible: false,
    currentSlide: 1
  };

  componentDidMount(){
    this.props.fetchUser();
  }

  openSlideMenu(){
    this.setState({
      isSlideVisible: true,
      currentSlide: 1
    })
  }

  async closeSlideMenu(){
    await this.setState({
      isSlideVisible: false,
      currentSlide: 1
    });
    await this.props.fetchMemes();
  }

  changeSlideMenu(menu){
    this.setState({
      currentSlide: menu
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header oauth={this.props.oauth} openAddModal={this.props.openAddModal} closeAddModal={this.props.closeAddModal} openSlideMenu={() => this.openSlideMenu()}/>
        <MobileHeader oauth={this.props.oauth} openAddModal={this.props.openAddModal} closeAddModal={this.props.closeAddModal} openSlideMenu={() => this.openSlideMenu()}/>
        <SlideMenu 
          profile={this.props.oauth}
          updateUser={this.props.updateUser}
          isSlideVisible={this.state.isSlideVisible} 
          currentSlide={this.state.currentSlide} 
          openSlideMenu={() => this.openSlideMenu()} 
          closeSlideMenu={() => this.closeSlideMenu()} 
          openMenu2={() => this.changeSlideMenu(2)} />
      </React.Fragment>
    );
  }
}

function mapStateToProps({ oauth }) {
  return { oauth };
}

export default connect(mapStateToProps, actions)(HeaderContainer);
