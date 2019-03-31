import React, { Component } from 'react';
import './PhotoBox.css';

class PhotoBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="PhotoBox-Component">
        <div className="photoBoxContainer" id={this.props.id} onClick={this.props.onClick}>
          <div className="photoBox" >
            {this.props.image &&
              <img src={this.props.image} alt="" />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoBox;