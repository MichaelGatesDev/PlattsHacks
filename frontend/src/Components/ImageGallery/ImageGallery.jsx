import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import "./ImageGallery.css";

class ImageGallery extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {

    var images = this.props.images.map(function (value, index) {
      return (
        <div className="gallery-image">
          <img src="#" alt="Example Image" />
        </div>
      );
    });

    if (!this.props.visible) {
      return null;
    } else
      return (
        <div className="imageContainer">
          <div className="gridContainer">
            {images}
          </div>
        </div>
      );
  };
}
export default ImageGallery;