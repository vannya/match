import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from "./actions";
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  renderFilterBar(){
    switch(this.props.oauth){
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
        return (<a href="/api/logout">Logout</a>);
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderFilterBar()}
      </div>
    );
  }
}

function mapStateToProps({oauth}){
  return {oauth};
}

export default connect(mapStateToProps, actions)(App);
