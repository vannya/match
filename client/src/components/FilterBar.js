import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";

class FilterBar extends Component {
  state = {
    currentSearch: "all"
  };

  componentDidMount() {
    this.props.actions.fetchMemes();
    this.props.actions.fetchTags();
  }

  handleOnChange(e) {
    this.props.actions.searchTag(e.target.value);
    this.setState({
      currentSearch: e.target.value
    });
  }

  render() {
    return (
      <div className="filter-selectors">
        <select onChange={e => this.handleOnChange(e)}>
          <option value="all">ALL TAGS</option>
          {!!this.props.tags ? this.props.tags.map((item, i) => {
            return (
              <option key={i} name={item} value={item}>
                {item}
              </option>
            );
          }) : null}
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
