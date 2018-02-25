import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from "./actions";
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  renderBar(){
    switch(this.props.oauth){
      case null:
        return;
      case false: 
        return (<a href="/api/googleLogin">Login</a>);
      default: 
        return (<a href="/api/logout">Logout</a>);
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderBar()}
      </div>
    );
  }
}

function mapStateToProps({oauth}){
  return {oauth};
}

export default connect(mapStateToProps, actions)(App);
