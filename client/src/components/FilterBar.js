import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class FilterBar extends Component {
  state = {
    currentSearch: "all"
  };

  componentDidMount() {
    this.props.fetchTags();
  }

  handleOnChange(e) {
    this.props.searchTag(e.target.value);
    this.setState({
      currentSearch: e.target.value
    });
  }

  render() {
    if (!this.props.tags) {
      return null;
    }
    return (
      <div>
        <select onChange={e => this.handleOnChange(e)}>
          <option value="all">ALL</option>
          {this.props.tags.map((item, i) => {
            return (
              <option key={i} name={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

function mapStateToProps({ tags }) {
  return { tags };
}

export default connect(mapStateToProps, actions)(FilterBar);
