import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./FilterBar.css";

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
      <div className="filter-selectors">
        <select onChange={e => this.handleOnChange(e)}>
          <option value="all">ALL TAGS</option>
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
