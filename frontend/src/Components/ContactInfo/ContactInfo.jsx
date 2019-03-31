import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './ContactInfo.css';

import ContactCard from '../ContactCard/ContactCard';


class ContactInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  getInternalIDFromName(name) {
    return name.replace(/\s/g, '_');
  }

  render() {
    if (!this.props.visible) {
      return null;
    } else {
      return (
        <div className="contactContainer">
          <div className="ContactBox">
            <h2 className="contactTitle">Contact </h2>
            <div className="cardContainer">
              <ContactCard icon="facebook" name="Facebook" />
              <ContactCard icon="email" email="sunyRugby@plattsburgh.edu" />
              <ContactCard icon="website" website="www.sunyRugby.com" />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ContactInfo;