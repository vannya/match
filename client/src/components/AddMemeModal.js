import React, { Component } from "react";

class AddMemeModal extends Component {
  state = {
    link: "",
    tags: []
  };

  // Turns a comma separated string list into an array
  tagsIntoArray(tagStr) {
    let tagArr = tagStr
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag !== "");
    return tagArr;
  }

  // Handles onChange from inputs
  handleOnChange = e => {
    if (e.target.name === "tags") {
      // Turn the tag string into an array and save as state.
      let arr = this.tagsIntoArray(e.target.value);
      this.setState({
        tags: arr
      });
    } else {
      // All other inputs are set as a state variable.
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  // Handles form submission.
  handleOnSubmit = async e => {
    e.preventDefault();
    if (!!this.state.link) {
      await this.props.addMeme({
        link: this.state.link,
        tags: this.state.tags
      });
    }
    await this.props.fetchTags();
    this.props.toggleModal();
  };

  componentWillUnmount() {
    this.props.fetchMemes();
  }

  // Renders the Add Meme Modal
  render() {
    return (
      <div className="modal-wrapper">
        <div className="overlay" onClick={this.props.toggleModal} />
        <div className="add-image-modal">
          <h2>Add Your Favorite Memes!</h2>
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="url"
              name="link"
              placeholder="Link to Image"
              onChange={this.handleOnChange}
            />
            <input
              type="text"
              name="tags"
              placeholder="Keywords separated by commas"
              onChange={this.handleOnChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMemeModal;
