import React, { Component } from 'react';
import "./AddImageModal.css";

class AddImageModal extends Component {
  state = { 
    link: ""
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    
    this.props.addMeme({link: this.state.link});
    this.props.toggleModal();
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className="overlay" onClick={this.props.toggleModal}></div>
        <div className="add-image-modal"> 
          <form onSubmit={this.handleOnSubmit}>
            <input type="url" name="link" placeholder="Test Input" onChange={this.handleOnChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddImageModal;