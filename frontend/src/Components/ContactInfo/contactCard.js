import React from "react";

import "./contactCard.css";
import facebook from "../../Assets/facebookIcon.svg";
import email from "../../Assets/email.svg";
import web from "../../Assets/web.svg";

function contactCard(props) {
  return <img src={props.icons} />;
}

class ContactCard extends React.Component {
  render() {
    return (
      <div className="contactCardContainer">
        <div className="contactCardBox">
          <img src={this.props.icons} className="facebookIcon" />
          <p className="name">Johnny Tsunami</p>
        </div>
      </div>
    );
  }
}

export default ContactCard;
