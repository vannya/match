import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions";

class FilterBar extends Component {
  state = {
    currentSearch: "all"
  };

  // Upon mounting, fetch memes and tags.
  componentDidMount() {
    this.props.actions.fetchMemes();
    this.props.actions.fetchTags();
  }

  // Handles selector changes and saves to state.
  handleOnChange(e) {
    // Calls a search on the tag to render only memes with that tag.
    this.props.actions.searchTag(e.target.value);
    this.setState({
      currentSearch: e.target.value
    });
  }

  // Renders the Filter Bar at the top of page.
  render() {
    // Sorts the tags alphabetically in the dropdown menu
    let sortedTags = this.props.tags || [];
    sortedTags.sort();

    return (
      <div className="filter-selectors">
        <select onChange={e => this.handleOnChange(e)}>
          <option value="all">ALL TAGS</option>
          {sortedTags.map((item, i) => {
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

function mapStateToProps({ tags, oauth }) {
  return { tags, oauth };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
