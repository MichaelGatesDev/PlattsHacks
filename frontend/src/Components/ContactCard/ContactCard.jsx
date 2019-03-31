import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './ContactCard.css';

class ContactCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="ContactCard-Component">
        <div className="contactCardContainer">
          <div className="contactCardBox">
            <img src={this.props.icons} className="facebookIcon" />
            <p className="name">Johnny Tsunami</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCard;



