import React, { Component } from "react";
import {connect} from "react-redux";
import MemeDisplay from "../MemeDisplay";
import placeholder from "../../stylesheets/assets/website.png";
import * as actions from "../../actions";

class MemeBoard extends Component {
  state = {};

  // Verifies that link is an image, else will render a placeholder image.
  isImage(link) {
    // Turns link into array to verify file type
    const linkArr = link.split(".");
    const linkEnding = linkArr[linkArr.length - 1];
    if (
      linkEnding === "jpg" ||
      linkEnding === "jpeg" ||
      linkEnding === "png" ||
      linkEnding === "gif"
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Sets the current Meme and opens the edit modal
  async toggleEditModal(meme) {
    await this.props.setCurrentMeme(meme);
    await this.props.toggleModal();
  }

  renderMemes = (memes) => {
    if(!!memes) {
      return memes.map((meme, i) => {
        return (
          <MemeDisplay
            key={i}
            imgSrc={this.isImage(meme.link) ? meme.link : placeholder}
            link={meme.link}
            linkId={meme._id}
            deleteImage={this.deleteImage}
            tags={meme.tags}
            toggleModal={() => this.toggleEditModal(meme)}
          />
        );
      })
    }
  }

  render() {
    return (
      <div className="memes-list">
        {this.renderMemes(this.props.memes)}
      </div>
    );
  }
}

export default connect(null, actions)(MemeBoard);
