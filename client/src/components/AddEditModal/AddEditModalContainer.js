import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddEditModal from './AddEditModal';
import * as actions from '../../actions';

class AddEditModalContainer extends Component {
  state = {
    link: null,
    tags: []
  };

  /**
   * On mount, sets the link and tag in local state.
   * The meme is the meme to edit or null if add.
   */
  componentDidMount() {
    if (!!this.props.meme) {
      this.setState({
        link: this.props.meme.link,
        tags: this.props.meme.tags
      });
    }
  }

  /**
   * On unmount, refetch and refresh memes list.
   */
  componentWillUnmount() {
    this.props.fetchMemes();
  }

  /**
   * Turns a comma separated string list into an array
   */
  tagsIntoArray(tagStr) {
    let tagArr = tagStr.split(',').map(tag => tag.trim());
    return tagArr;
  }

  /**
   * Handles onChange from inputs
   */
  handleOnChange = async e => {
    let tags = this.state.tags.slice();
    let link = this.state.link;

    // Sets the new values to local variables
    if (e.target.name === 'tags') {
      // Turn the tag string into an array and save as state.
      let arr = this.tagsIntoArray(e.target.value);
      tags = arr;
    } else if (e.target.name === 'link') {
      link = e.target.value;
    }

    // Saves new values to state
    await this.setState({
      link: link,
      tags: tags
    });
  };

  /**
   *  Handles form submission.
   */
  handleOnSubmit = async e => {
    e.preventDefault();
    // If there is a link, addMeme.
    if (!!this.state.link) {
      await this.props.addMeme({
        link: this.state.link,
        tags: this.state.tags
      });
    }
    // Refetch the tag list
    await this.props.fetchTags();
    // Close the modal
    this.props.toggleModal();
  };

  /**
   * Deletes a meme and refetches memes and tags.
   * params - imageId - the ._id from mLab.
   */
  deleteMeme = async imageId => {
    // Delete meme.
    await this.props.deleteMeme(imageId);
    // After delete, refetch memes and tags.
    this.props.fetchMemes();
    this.props.fetchTags();
    // Close Modal.
    this.props.toggleModal(null);
  };

  /**
   * Renders the AddEditModal
   */
  render() {
    const { meme, modalType, toggleModal } = this.props;
    return (
      <AddEditModal
        meme={meme}
        tags={this.state.tags}
        modalType={modalType}
        toggleModal={toggleModal}
        deleteMeme={() => this.deleteMeme(meme._id)}
        handleOnChange={e => this.handleOnChange(e)}
        handleOnSubmit={e => this.handleOnSubmit(e)}
      />
    );
  }
}

export default connect(
  null,
  actions
)(AddEditModalContainer);
