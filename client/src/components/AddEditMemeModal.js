import React, { Component } from "react";

class AddEditMemeModal extends Component {
  state = {
    link: null,
    tags: []
  };

  componentDidMount(){
    if(!!this.props.meme){
      this.setState({
        link: this.props.meme.link,
        tags: this.props.meme.tags
      });
    }
  }
  // Turns a comma separated string list into an array
  tagsIntoArray(tagStr) {
    let tagArr = tagStr
      .split(",")
      .map(tag => tag.trim());
    return tagArr;
  }

  // Handles onChange from inputs
  handleOnChange = async e => {
    let tags = this.state.tags;
    let link = this.state.link;
    if (e.target.name === "tags") {
      // Turn the tag string into an array and save as state.
      let arr = this.tagsIntoArray(e.target.value);
      tags = arr;
    } else if (e.target.name === "link") {
      link = e.target.value;
    }
    await this.setState({
      link: link,
      tags: tags
    });
    if(this.props.modalType === "edit") {
      await this.props.addMeme({
        link: this.state.link,
        tags: this.state.tags
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

  renderHeader(){
    if(this.props.modalType === "add") {
      return "Add Your Favorite Memes!";
    } else {
      return "Edit Your Meme!";
    }
  }

  renderLinkInput(){
    if(this.props.modalType === "add"){
      return <input
        type="url"
        name="link"
        placeholder="Link to Image"
        onChange={this.handleOnChange}
      />
    } else if (this.props.modalType === "edit") {
      return (<p>{this.props.meme.link}</p>);
    }
  }

  renderButtons(){
    if(this.props.modalType === "add") {
      return <button type="submit">Submit</button>;
    } else if(this.props.modalType === "edit") {
      return (
        <div>
          <button type="button" onClick={this.props.deleteMeme}>Delete</button>
          <button type="submit">Submit</button>
        </div>);
    }
  }

  // Renders the Add Meme Modal
  render() {
    return (
      <div className="modal-wrapper">
        <div className="overlay" onClick={this.props.toggleModal} />
        <div className="add-image-modal">
          <h2>{this.renderHeader()}</h2>
          <form onSubmit={this.handleOnSubmit}>
            {this.renderLinkInput()}
            <input
              type="text"
              name="tags"
              placeholder="Keywords separated by commas"
              onChange={this.handleOnChange}
              value={this.state.tags}
            />
            {this.renderButtons()}
          </form>
        </div>
      </div>
    );
  }
}

export default AddEditMemeModal;