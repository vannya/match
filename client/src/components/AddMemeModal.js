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

  handleOnChange = e => {
    if (e.target.name === "tags") {
      let arr = this.tagsIntoArray(e.target.value);
      this.setState({
        tags: arr
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  handleOnSubmit = e => {
    if (!!this.state.link) {
      this.props.addMeme({
        link: this.state.link,
        tags: this.state.tags
      });
    }
    this.props.fetchTags().then(this.props.toggleModal());
  };

  componentWillUnmount(){
    this.props.fetchMemes();
  }

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
