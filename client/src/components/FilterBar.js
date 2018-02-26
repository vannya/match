import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from "../actions";

class FilterBar extends Component {

  state = {
    currentSearch: "all"
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  renderOptions() {
    const {tags} = this.props;
    return tags.map((item, i) => {
      return (
        <option key={i} name={item} value={item}>
          {item}
        </option>
      );
    });
  }

  handleOnChange(e) {
    this.props.searchTag(e.target.value);
    this.setState({
      currentSearch: e.target.value
    });
  }

  render() {
    return (
      <div>
        <select onChange={e => this.handleOnChange(e)}>
          <option value="all">ALL</option>
          {!!this.props.tags ? this.renderOptions() : null}
        </select>
      </div>
    );
  }
}

function mapStateToProps({tags}){
  return {tags};
}

export default connect(mapStateToProps, actions)(FilterBar);
